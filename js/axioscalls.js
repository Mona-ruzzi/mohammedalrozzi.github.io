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

//new simultaneous calls//
/*
new Vue({
  el: '#allaxios',
  data() {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted() {
    axios.all([
      axios.get('https://covid2019-api.herokuapp.com/v2/country/Malta'),
      axios.get('https://covid2019-api.herokuapp.com/v2/country/Holland')
    ])
      
      .then(response => (this.info = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
})

axios.all([
  axios.get('http://google.com'),
  axios.get('http://apple.com')
])
  .then(axios.spread((googleRes, appleRes) => {
    // do something with both responses
  }));
  */
new Vue ({
  el: '#helloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      infoP: '',
      infoI: '',
      infoOM: '',
      infoMA: '',
      infoQA: '',
      infoUS: '',
      infoGB: '',
    }
  },
  methods: {
    async showPalestine() {
      const infoP = await this.$http.get('https://www.corona.ps/API/summary');
      this.infoP = infoP.data
    },
    async showItaly() {
      const infoI = await this.$http.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations/137?source=jhu&timelines=false');
      this.infoI = infoI.data.location
    },
    async showOMAN() {
      const infoOM = await this.$http.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations/176?source=jhu&timelines=false');
      this.infoOM = infoOM.data.location
    },
    async showMorocco() {
      const infoMA = await this.$http.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations/163?source=jhu&timelines=false');
      this.infoMA = infoMA.data.location
    },
    async showQATAR() {
      const infoQA = await this.$http.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations/185?source=jhu&timelines=false');
      this.infoQA = infoQA.data.location
    },
    async showtheUS() {
      const infoUS = await this.$http.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations/225?source=jhu&timelines=false');
      this.infoUS = infoUS.data.location
    },
    async showtheUK() {
      const infoGB = await this.$http.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=jhu&country_code=GB');
      this.infoGB = infoGB.data
    },
  }
})