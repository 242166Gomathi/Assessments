package Question3;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

/**
 * Date Formatter
 */
public class DateFormatter {
    public static void main(String[] args) {
        LocalDate currentDate = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM-dd-yyyy");
        String formattedDate = currentDate.format(formatter);

        System.out.println("Current date in the format MM-dd-yyyy: " + formattedDate);
    }
}