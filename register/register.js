let currentParticipants = 1;

document.querySelector('button').addEventListener('click', (event) => {
  event.preventDefault();
  currentParticipants++;
  document.getElementById("participantCount").textContent = currentParticipants;
  const participantSection = document.querySelector('.participant1').cloneNode(true);
  updateParticipantSectionIds(participantSection, currentParticipants);
  const fieldset = document.querySelector('.participants');
  fieldset.insertBefore(participantSection, fieldset.querySelector('#add'));
});

import { updateParticipantSectionIds } from './templates.js';


const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  let totalFees = 0;
  const feeInputs = document.querySelectorAll('input[type="number"][name="fee"]');
  for (const feeInput of feeInputs) {
    totalFees += parseFloat(feeInput.value);
  }

  const adultName = document.getElementById('adult_name').value;

  form.classList.add('hidden');
  const summary = document.getElementById('summary');
  summary.classList.remove('hidden');
  summary.textContent = `Thank you ${adultName} for registering. You have registered ${currentParticipants} participants and owe $${totalFees.toFixed(2)} in Fees.`;
});
