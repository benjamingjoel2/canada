import { summerMonths, SEASON_COOKIE, CURRENCY_COOKIE } from '@/config/seasons';

/**
 * Runs in <head> before first paint. Restores the visitor's season and currency
 * (localStorage, then cookie), otherwise picks the current Northern Hemisphere season.
 */
export const bootScript = `(function(){try{var d=document.documentElement;function g(k){var v=null;try{v=localStorage.getItem(k)}catch(e){}if(!v){var m=document.cookie.match(new RegExp('(?:^|; )'+k+'=([^;]*)'));v=m&&m[1]}return v}var s=g('${SEASON_COOKIE}');if(s!=='summer'&&s!=='winter'){s=${JSON.stringify(summerMonths)}.indexOf(new Date().getMonth()+1)>-1?'summer':'winter'}d.dataset.season=s;var c=g('${CURRENCY_COOKIE}');if(c)d.dataset.currency=c}catch(e){}})();`;
