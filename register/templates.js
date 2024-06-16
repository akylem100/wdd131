export function updateParticipantSectionIds(participantSection, participantNumber) {
    const elementsToUpdate = participantSection.querySelectorAll('[id]');
    for (const element of elementsToUpdate) {
      const oldId = element.id;
      const newId = `${oldId}-${participantNumber}`;
      element.id = newId;
      
      const labelFor = document.querySelector(`label[for="${oldId}"]`);
      if (labelFor) {
        labelFor.setAttribute('for', newId);
      }
    }
  }