package Question2;

/**
 * Division
 */
public class Division {
    public static void main(String[] args) {
        int dividend = 10;
        int divisor = 0;

        try {
            int result = divide(dividend, divisor);
            System.out.println("Result: " + result);
        } catch (DivisionException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    /**
     *
     * @param dividend
     * @param divisor
     * @return result
     * @throws DivisionException
     */
    public static int divide(int dividend, int divisor) throws DivisionException {
        try {
            int result = dividend / divisor;
            System.out.println("Divisor used: " + divisor);
            System.out.println("Dividend used: " + dividend);
            return result;
        } catch (ArithmeticException e) {
            System.out.println("Error Trace:");
            e.printStackTrace();
            throw new DivisionException("Please pass a valid divisor");
        }
    }

    /**
     * DivisionException
     */
    static class DivisionException extends Exception {
        public DivisionException(String message) {
            super(message);
        }
    }
}
