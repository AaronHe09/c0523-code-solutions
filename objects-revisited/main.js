const api = new XMLHttpRequest();
const business = {
  opens: '6:00 AM',
  closes: '7:00 PM',
  totalEmployees: 2,
  daysOpen: ['Mon', 'Wed', 'Fri'],
  employees: {
    Raymond: {
      position: 'CEO',
      daysOfWeekWorking: ['Mon', 'Fri'],
    },
    Raul: {
      position: 'Salesman',
      daysOfWeekWorking: ['Mon', 'Wed', 'Fri'],
    },
  },
};

function addWeekends() {
  business.daysOpen.push('Sat', 'Sun');

  for (const employee in business.employees) {
    business.employees[employee].daysOfWeekWorking.push('Sat', 'Sun');
  }
}

function addEmployees() {
  api.open('GET', 'https://jsonplaceholder.typicode.com/users');
  api.responseType = 'json';
  api.addEventListener('load', function () {
    for (let i = 0; i < 4; i++) {
      const job = ['Developer', 'Janitor', 'HR', 'Designer'];
      const employee = api.response[i].name;
      business.employees[employee] = {
        position: job[i],
        daysOfWeekWorking: [],
        fullTime: false,
      };
      const workingDays = business.employees[employee].daysOfWeekWorking;

      // adds random work day
      for (let e = 0; e < 3; e++) {
        const random = Math.round(Math.random());

        if (random) {
          workingDays.push(business.daysOpen[e]);
        }
      }

      workingDays.push('Sat', 'Sun');

      // shows if employee is fulltime
      if (workingDays.length === 5) {
        business.employees[employee].fullTime = true;
      }

      // updates total employees
      business.totalEmployees++;
    }
  });
  api.send();
}

function deleteEmployee(employeeName) {
  delete business.employees[employeeName];
  business.totalEmployees--;
}

addEventListener('DOMContentLoaded', function () {
  addWeekends();

  for (const employee in business.employees) {
    const currentEmp = business.employees[employee];
    currentEmp.fullTime = false;

    if (currentEmp.daysOfWeekWorking.length === 5) {
      currentEmp.fullTime = true;
    }
  }

  addEmployees();
  deleteEmployee('Raymond');
});
