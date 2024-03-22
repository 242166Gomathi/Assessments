package Question1;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.TreeSet;

/**
 * Executable Program
 */
// 3. Executable Program
public class Main {

    /**
     *
     * @return Cities
     */
    public static Address getAddress(Map<Employee, Address> empAddressMap, Employee emp) {
        if (empAddressMap.containsKey(emp)) {
            return empAddressMap.get(emp);
        } else {
            System.out.println("Employee does not exist.");
            return null;
        }
    }

    public static void main(String[] args) {
        /*
         *  Create a Map<Employee, Address> and add sample data
         */
        Map<Employee, Address> empAddressMap = new HashMap<>();
        empAddressMap.put(new Employee(1, "Shreya"), new Address(101, "WhiteField", "Bangalore", 570002));
        empAddressMap.put(new Employee(2, "Reema"), new Address(202, "whiteField", "Kerala", 570002));
        empAddressMap.put(new Employee(3, "Gomathi"), new Address(303, "WhiteField", "Bangalore", 570002));

        /*
         * Invoke getAddress and print the address
         */
        Employee emp1 = new Employee(1, "Shreya");
        Address address1 = getAddress(empAddressMap, emp1);
        if (address1 != null) {
            System.out.println(address1);
        }

        Employee emp2 = new Employee(4, "Anu"); // Employee does not exist
        Address address2 = getAddress(empAddressMap, emp2);

        /*
         * Get distinct cities in ascending order
         */
        Set<String> cities = new TreeSet<>();
        for (Address address : empAddressMap.values()) {
            cities.add(address.city);
        }
        System.out.println("Distinct cities: " + cities);
    }
}
