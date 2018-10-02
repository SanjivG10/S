var NepaliDate = require('nepali-calendar-js')

export const ToNepali = (year,month,day)=>{
  return NepaliDate.toNepali(year,month,day);
}
