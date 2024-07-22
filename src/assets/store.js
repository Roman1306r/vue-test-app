import { reactive } from 'vue'
import serverJson from './server/server.json?186485'








export let orderList = []

export const store = reactive({
    status: 0,
    isSubmit: false,
    selected: 'default',
    email: '',
    name: '',
    procent: 75,
    file: {
      name: '',
      file: null,
    },
    period: 90,
    count: 0,

    setFileToStore(event) {
      this.file.file = event.target.files[0]
      this.file.name = event.target.files[0].name
    },



    getCurrentDateAndStatus({date: time, status}) {
        if(typeof time == 'string') return {
            date: time,
            status: status
        }
        const date = Date.now() + 4000
        const periodInMsc = 7889400000
        function checkDate(date, isMonth = false) {
          if(isMonth) date++
          return date < 10 ? '0' + date : date
        }
        function setTime(time) {
            if(time) return `${checkDate(new Date(time).getDate())}.${checkDate(new Date(time).getMonth(), true)}.${new Date(time).getFullYear()}`
            return `${checkDate(new Date(date).getDate())}.${checkDate(new Date(date).getMonth(), true)}.${new Date(date).getFullYear()}`
        }
        let a = date - time
        if(a > 0) {
            if(periodInMsc < a) {
                return {
                  status: 1,
                  date: setTime(time)
                }
            } else {
              return {
                status: 0,
                date: setTime(time)
              }
            }
        } else {
            return {
                status: -1,
                date: setTime(time)
            }
        }
    },




  async submitForm(event) {
    event.preventDefault();
    await this.getData()

    orderList.push({
      selected: this.selected,
      email: this.email,
      name: this.name,
      procent: this.procent,
      file: {
        file: this.file.file,
        name: this.file.name
      },
      date: Date.now(),
      period: 90
    })

    orderList = [...orderList.map(o => {
        let result = this.getCurrentDateAndStatus(o)
        o.date = result.date
        o.status = result.status
        return o
    })]
    this.isSubmit = true

  },



   async getData() {
     try {
      if(this.count) return
      let responce = await serverJson
      orderList = [...responce]
      this.count++
     } catch (e) {
       console.log(e.message);
     }
   },


  closeOrderHistory(event) {
    event.preventDefault()
    this.status = 0
    this.selected = 'default'
    this.email = ''
    this.name = ''
    this.procent = 75
    this.file.name = ''
    this.file.file = null
    this.period = 90
    this.isSubmit = false
  }

})
