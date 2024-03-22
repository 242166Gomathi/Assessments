package Question1;


/**
 * class Address
 */
public class Address {
    int houseNo;
    String street;
    String city;
    int pinCode;

    Address(int houseNo, String street, String city, int pinCode) {
        this.houseNo = houseNo;
        this.street = street;
        this.city = city;
        this.pinCode = pinCode;
    }

    /**
     *
     * @return houseNo,street,city,pinCode
     */
    @Override
    public String toString() {
        return houseNo + "," + street + "," + city + "," + pinCode;
    }
}
