package Question3;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Scanner;

/**
 * Data Comparison
 */
public class DateComparison {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a date (yyyy-MM-dd): ");
        String inputDateString = scanner.nextLine();

        try {
            LocalDate inputDate = LocalDate.parse(inputDateString, DateTimeFormatter.ISO_DATE);
            LocalDate currentDate = LocalDate.now();

            if (inputDate.isEqual(currentDate)) {
                System.out.println("The input date is equal to the current date.");
            } else if (inputDate.isBefore(currentDate)) {
                System.out.println("The input date is before the current date.");
            } else {
                System.out.println("The input date is after the current date.");
            }
        } catch (DateTimeParseException e) {
            System.out.println("Invalid date format. Please enter the date in the format yyyy-MM-dd.");
        }
    }
}