export default function ({ $axios, redirect, store }) {
  $axios.defaults.timeout = 1800
}