// Express setup
const express = require("express");
const router = express.Router();
// Model
const EmployeesData = require("../model/employeesModel");

//url  http:localhost:5000/employees

// Get all Employee
router.get("/", async (req, res) => {
  try {
    const employees = await EmployeesData.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add employee
//url  http:localhost:5000/employees
/*{
    "name" : "Hadi",
    "age":31,
    "add":"Berlin"
} */
router.post("/", async (req, res) => {
  const employee = new EmployeesData({
    name: req.body.name,
    age: req.body.age,
    add: req.body.add,
  });
  try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware
async function getEmployee(req, res, next) {
  let employee;
  try {
    // employee = await EmployeesData.findById(req.params.id);
    // employee = await EmployeesData.find({ name: req.params.name });

    employee = await EmployeesData.findOne({ name: req.params.name });
    if (employee == null)
      return res.status(404).json({ message: "employee NOT Found" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  console.log(employee);
  res.employee = employee;
  next();
}

// Get one employee
// url http://localhost:5000/employees/Hadi
router.get("/:name", getEmployee, (req, res) => {
  res.status(200).json(res.employee);
});

// GET http://localhost:5000/employees/ get all employees
// GET http://localhost:5000/employees/:name get one employees
// POST http://localhost:5000/employees/ add new employees
// DELETE http://localhost:5000/employees/:name delete one employee (later with id)
// UPDATE (PUT) http://localhost:5000/employees/:name update  all employee info (later with id)
// PATCH http://localhost:5000/employees/:name update some employee info (later with id)

router.delete("/:name", getEmployee, async (req, res) => {
  try {
    await res.employee.remove();
    res.status(200).json({ message: "employee gone" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/:name", getEmployee, async (req, res) => {
  // console.log(req.body);
  // console.log(res.employee.name);
  // res.json(res.employee.name);
  if (req.body.name) {
    res.employee.name = req.body.name;
  }
  if (req.body.age) {
    res.employee.age = req.body.age;
  }
  if (req.body.add) {
    res.employee.add = req.body.add;
  }
  try {
    await res.employee.save();
    res.status(200).json({ message: "employee patched", data: res.employee });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
