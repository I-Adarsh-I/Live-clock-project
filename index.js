//Time(Digital)
const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
regTime = () => {
    const a = new Date();
    let time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    // console.log(time);
    let date = a.toLocaleDateString(undefined, options);
    // console.log(date);

    document.getElementById("time").innerHTML = time + " </br>On " + date;
  };

  setInterval(regTime, 1000);

  //Time(Analog)
setInterval(() => {
	d = new Date(); //object of date()
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hr_rotation = 30 * hr + min / 2; //converting current time
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;

	hour.style.transform = `rotate(${hr_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

//analog clock visibility
document.getElementById("btn").addEventListener("click", () => {
     document.getElementById("clockContainer").style.visibility = "visible";
});