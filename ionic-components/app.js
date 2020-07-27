const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');

const confirmBtn = document.querySelector('#btn-confirm');
const cancelBtn = document.querySelector('#btn-cancel');

const expensesList = document.querySelector('#expenses-list');

const totalExpensesOutput = document.querySelector('#total-expenses');

const alertCtrl = document.querySelector('ion-alert-controller');


let totalExpenses = 0

const clear = () => {
  reasonInput.value = ''; 
  amountInput.value = '';
};

confirmBtn.addEventListener('click', () => {
  console.log('Confirmation works!')

  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    function presentAlert() {
      const alert = document.createElement('ion-alert');
      alert.header = 'Calma lá, irmão!';
      alert.message = 'Você deve realizar ao menos uma doação à nossa congregação! Por favor, insira uma quantia válida.';
      alert.buttons = ['Amém'];
  
      document.body.appendChild(alert);
      return alert.present();
    }

    presentAlert()

    return
  }
  console.log(enteredReason, enteredAmount);
  const newItem = document.createElement('ion-item');
  newItem.textContent = enteredReason + ': R$' + enteredAmount;

  expensesList.appendChild(newItem);
  
  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExpenses;
  clear();

});

cancelBtn.addEventListener('click', clear)
