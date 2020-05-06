/*
new Vue({
  el: '#dark_sky',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api.darksky.net/forecast/18ff4f4f5e6f989842bcd0419fc8e238/37.8267,-122.4233?exclude=hourly,minutely,daily,flags,offset')
      .then(response => (this.info = response.data))
  }
})
*/
/* new Vue({
  el: '#numbers_facts',
  data() {
    return {
      info: null
    }
  },
  mounted() {
    axios
      .get('http://numbersapi.com/random/year?min=1985&max=2019')
      .then(response => (this.info = response.data))
  }
})
*/
new Vue({
  el: '#italy-figures',
  data() {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted() {
    axios
      .get('https://covid2019-api.herokuapp.com/v2/country/italy')
      .then(response => (this.info = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
})
new Vue({
  el: '#spain-figures',
  data() {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted() {
    axios
      .get('https://covid2019-api.herokuapp.com/v2/country/Spain')
      .then(response => (this.info = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
})
new Vue({
  el: '#morocco-figures',
  data() {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted() {
    axios
      .get('https://covid2019-api.herokuapp.com/v2/country/Morocco')
      .then(response => (this.info = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
})
new Vue({
  el: '#qatar-figures',
  data() {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted() {
    axios
      .get('https://covid2019-api.herokuapp.com/v2/country/Qatar')
      .then(response => (this.info = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
})
new Vue({
  el: '#oman-figures',
  data() {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted() {
    axios
      .get('https://covid2019-api.herokuapp.com/v2/country/Oman')
      .then(response => (this.info = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
})
new Vue({
  el: '#WBG-figures',
  data() {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted() {
    axios
      .get('https://covid2019-api.herokuapp.com/v2/country/West%20Bank%20and%20Gaza')
      .then(response => (this.info = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
})
new Vue({
  el: '#US-figures',
  data() {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted() {
    axios
      .get('https://covid2019-api.herokuapp.com/v2/country/US')
      .then(response => (this.info = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
})
new Vue({
  el: '#GB-figures',
  data() {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted() {
    axios
      .get('https://covid2019-api.herokuapp.com/v2/country/GB')
      .then(response => (this.info = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
})
new Vue({
  el: '#australia-figures',
  data() {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted() {
    axios
      .get('https://covid2019-api.herokuapp.com/v2/country/Australia')
      .then(response => (this.info = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
})
new Vue({
  el: '#france-figures',
  data() {
    return {
      info: null,
      loading:true,
      errored:false
    }
  },
  mounted() {
    axios
      .get('https://covid2019-api.herokuapp.com/v2/country/France')
      .then(response => (this.info = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
})
new Vue({
  el: '#palestine-figures',
  data() {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted() {
    axios
      .get('https://www.corona.ps/API/summary')
      .then(response => (this.info = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
})