/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  return (
    person.firstName.charAt(0) + person.lastName.charAt(person.lastName - 1)
  );
}