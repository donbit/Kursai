if (!key) {
               
    const buttonEdit = document.createElement('button');
    buttonEdit.onclick = () => {

        const popup = document.createElement('dialog')
        popup.open = true;

        const inputName = document.createElement('input')
        inputName.value = item.name

        const inputAmount = document.createElement('input')
        inputAmount.value = item.amount
        const confirm = document.createElement('button')
        
        confirm.onclick = () => {
            item.name = inputName.value
            item.amount = inputAmount.value
        }

        const cancel = document.createElement('button')
        confirm.onclick = () => {
            popup.open = false;
        }
    }
    
}