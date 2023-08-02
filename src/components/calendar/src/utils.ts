// 是否为闰年
export const isRunYear = (year:number|string) => Number(year) % 4 === 0 
&& Number(year) % 100 !== 0 || Number(year) % 400 === 0