let size = 0;
function loadData() {
  fetchData();
}
document.getElementById("show-all").addEventListener("click", submitValue);

function submitValue(e) {
  e.preventDefault();
  fetchData();
}

function fetchData() {
  fetch("exercise-1_data.json")
    .then((response) => response.json())
    .then((data) => {
      let max = 0;
      document.getElementById("locks").innerHTML = "";
      if (size === 5) {
        max = data.length - 1;
        size = 0;
      } else {
        size = 5;
        max = 5;
      }
      data.slice(0, max).map((key) => {
        test(key);
      });
    });
}
function test(key) {
  let lockDate = formattedDate(key.date);
  let locked = key.active ? "locked" : "Unlocked";
  let ul = document.getElementById("locks");
  let li = document.createElement("li");
  li.innerHTML = `
          
                  <span class="date">${lockDate}</span>
                  <span>
                    <div class="lock-wrapper">
                        <svg
                        class="lock-icon"
                        width="12px"
                        height="18px"
                        viewBox="0 0 12 18"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <g
                            id="Credit-Lock"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                        >
                            <g
                            id="2.1-Creditlock-Locked-History-Desktop"
                            transform="translate(-424.000000, -539.000000)"
                            fill="#3E3F42"
                            fill-rule="nonzero"
                            >
                            <g
                                id="bureau"
                                transform="translate(167.000000, 190.000000)"
                            >
                                <g
                                id="Group"
                                transform="translate(22.000000, 349.820582)"
                                >
                                <path
                                    d="M245.5,5.79545455 L244.75,5.79545455 L244.75,3.75 C244.75,1.68 243.07,-1.77635684e-14 241,-1.77635684e-14 C238.93,-1.77635684e-14 237.25,1.68 237.25,3.75 L237.25,5.79545455 L236.5,5.79545455 C235.675,5.79545455 235,6.47045455 235,7.29545455 L235,14.7954545 C235,15.6204545 235.675,16.2954545 236.5,16.2954545 L245.5,16.2954545 C246.325,16.2954545 247,15.6204545 247,14.7954545 L247,7.29545455 C247,6.47045455 246.325,5.79545455 245.5,5.79545455 Z M241,12.5454545 C240.175,12.5454545 239.5,11.8704545 239.5,11.0454545 C239.5,10.2204545 240.175,9.54545455 241,9.54545455 C241.825,9.54545455 242.5,10.2204545 242.5,11.0454545 C242.5,11.8704545 241.825,12.5454545 241,12.5454545 Z M243.325,5.79545455 L238.675,5.79545455 L238.675,3.75 C238.675,2.4675 239.7175,1.425 241,1.425 C242.2825,1.425 243.325,2.4675 243.325,3.75 L243.325,5.79545455 Z"
                                    id="unlock_icon-copy-8"
                                ></path>
                                </g>
                            </g>
                            </g>
                        </g>
                        </svg>
                        <span class="lock">${locked}</span>
                    </div>
                  </span>
                
`;
  li.classList.add("history-list");
  ul.appendChild(li);
  let div = document.class;
}

function formattedDate(key) {
  let date = new Date(key);
  let lockDate = "";
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let format = "AM";
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (month < 10) {
    month = "0" + (month + 1);
  }
  if (day < 10) {
    day = "0" + day;
  }
  if (hours > 12) {
    hours = hours - 12;
    format = "PM";
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return (lockDate =
    year +
    "-" +
    month +
    "-" +
    day +
    " " +
    hours +
    ":" +
    minutes +
    format +
    " GMT +5");
}
