using CRUDApplication.Models;

namespace CRUDApplication.Data.Contracts
{
    public interface IIEmployeeRepository
    {
        IEnumerable<Employee> GetAllEmployees();
         Employee? GetEmployeeById(int id);
         bool InsertEmployee(Employee employee);
         bool UpdateEmployee(Employee employee);
         bool DeleteEmployee(int id);
         bool EmployeeExists(string email);
         bool EmployeeExists(int id, string email);
    }
}
