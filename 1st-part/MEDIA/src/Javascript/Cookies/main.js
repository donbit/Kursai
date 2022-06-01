const cookieDisplay = document.getElementById('cookieDisplay');
const grandmaUpgrade = document.getElementById('mociutesKocelas')
// Count
let cookieCount = getCookie('cookieCount') || 0;
let grandmaCount = getCookie('grandmaCount') || 0;

// Intervals
let grandmaInterval;

//Display
cookieDisplay.textContent = cookieCount;

//Cookie Production
let cookieProduction ={
    grandma: {
        base: 2,
        upgrade: false,
    },
}

if (getCookie('grandmaUpgrade')){
    buyGrandmaUpgrade(true);
}



function increaseCookieCount() {
    cookieCount++;
    setCookieValues();
   

}
function setCookie(name, value) {
    document.cookie = `${name}=${value};`
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`;${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}



const buyGrandma = () => {
    if (cookieCount >= 10) {
        cookieCount = Number(cookieCount) - 10
        setCookieValues();

        grandmaCount++
        setCookie('grandmaCount', grandmaCount);
        setGrandmaInterval();

        setGrandmaUpdateButtonState();
    }
}

function setGrandmaUpdateButtonState() {
    if (grandmaCount >= 5) {
        grandmaUpgrade.style.display='block';

        if (cookieProduction.grandma.upgrade) {
            grandmaUpgrade.disabled = true;
        }
    }
}

function setGrandmaInterval() {
    if (grandmaCount) {
        if (grandmaInterval) {
            clearInterval(grandmaInterval);
        }

        grandmaInterval = setInterval(() => grandmaCookieProduction(), 1000)
    }
}

function grandmaCookieProduction(){
    console.log(cookieProduction.grandma.base)
    cookieCount = Number(cookieCount) + cookieProduction.grandma.base * grandmaCount;
    setCookieValues();
}

function setCookieValues() {
    setCookie('cookieCount', cookieCount)
    cookieDisplay.textContent = cookieCount
}

function buyGrandmaUpgrade (alreadyBought) {
    if (cookieCount >= 10 && !cookieProduction.grandma.upgrade) {
        if (!alreadyBought) {
            cookieCount = Number (cookieCount) - 10;
            setCookieValues();
        }
        cookieProduction.grandma.base = cookieProdution.grandma.base * 30;
        cookieProduction.grandma.upgrade = true;
        setCookie('grandmaUpgrade', cookieProduction.grandma.upgrade)
    }
}




setGrandmaInterval();
setGrandmaUpdateButtonState();


// function resetCookies(name, value) {
//     document.cookie = `${name}=${value}`
//     cookieCount = getCookie(name, value)
//     cookieDisplay.textContent = cookieCount
// }


