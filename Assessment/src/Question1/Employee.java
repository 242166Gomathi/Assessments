package Question1;

/**
 * Class Employee
 */
public class Employee {
    int empId;
    String name;

    Employee(int empId, String name) {
        this.empId = empId;
        this.name = name;
    }

    /**
     *
     * @param obj
     * @return false
     */
    @Override
    public boolean equals(Object obj) {
        if (obj instanceof Employee) {
            Employee other = (Employee) obj;
            return this.empId == other.empId;
        }
        return false;
    }

    @Override
    public int hashCode() {
        return empId;
    }
}

