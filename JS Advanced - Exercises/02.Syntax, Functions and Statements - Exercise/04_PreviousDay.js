function previousDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1);
    let formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    console.log(formattedDate);
}
previousDay(2016, 9, 30)
previousDay(2015, 5, 10)