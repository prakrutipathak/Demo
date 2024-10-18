using CRUDApplication.Data.Contracts;
using CRUDApplication.Models;

namespace CRUDApplication.Data.Implementations
{
    public class EmployeeRepository: IIEmployeeRepository
    {
        private readonly AppDbContext _appDbContext;

        public EmployeeRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        public IEnumerable<Employee> GetAllEmployees()
        {
            List<Employee> employees = _appDbContext.Employees.ToList();
            return employees;
        }
        public Employee? GetEmployeeById(int id)
        {
            var employee = _appDbContext.Employees
                .FirstOrDefault(c => c.EmployeeId == id);
            return employee;
        }
        public bool InsertEmployee(Employee employee)
        {
            var result = false;
            if (employee != null)
            {
                _appDbContext.Employees.Add(employee);
                _appDbContext.SaveChanges();
                result = true;
            }
            return result;
        }
        public bool UpdateEmployee(Employee employee)
        {
            var result = false;
            if (employee != null)
            {
                _appDbContext.Employees.Update(employee);
                _appDbContext.SaveChanges();
                result = true;
            }
            return result;
        }
        public bool DeleteEmployee(int id)
        {
            var result = false;
            var employee = _appDbContext.Employees.Find(id);
            if (employee != null)
            {
                _appDbContext.Employees.Remove(employee);
                _appDbContext.SaveChanges();
                result = true;
            }
            return result;
        }
        public bool EmployeeExists(string email)
        {
            var employees = _appDbContext.Employees.FirstOrDefault(c => c.Email.ToLower() == email.ToLower());
            if (employees != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public bool EmployeeExists(int id, string email)
        {
            var employee = _appDbContext.Employees.FirstOrDefault(c => c.Email.ToLower() == email.ToLower() &&(c.EmployeeId != id));
            if (employee != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
