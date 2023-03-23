import axios, { AxiosRequestConfig } from "axios";
import { BehaviorSubject } from "rxjs";

const baseUrl =  'https://api.imgur.com/3/album/Osh5s39'
const userName = 'nemzetiloter'
const userID = '95fdc70ccbf43ad'
const userSecret = 'ea96700597abe7abef2ae9e78d247a38b556919b'
const portfolioToken = 'bc279c9e5285032a33e4ad5e8a5c911df914f4ba'

export let data$ = new BehaviorSubject<any>([])

const Option: AxiosRequestConfig = {
    method: 'GET',
    url: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    //   'Auth-Token': portfolioToken,
      'Authorization': 'Clien-ID ' +  userID ,
    },
  };

 export function getAlbumss(): any {
    const result =  axios(Option);
    console.warn(result);
    data$.next(result)
    
    
  }

  getAlbumss()