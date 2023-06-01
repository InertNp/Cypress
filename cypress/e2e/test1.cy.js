
describe("login test", () => {
    beforeEach(() => {
      cy.visit("https://naksapass.addon.com.np/public/login"); // Replace '/add-admin' with the actual URL of the form page
    });
  
    it("should display the Add Admin form", () => {
      cy.get('.heading').should("contain", "Login");
    });
  
    // it("should validate required fields", () => {
    //   cy.get('button[type="submit"]').click(); // Submit the form without filling any fields
  
    //   cy.get(".ant-form-item-explain").should("have.length", 6); // Check that error messages are displayed for all required fields
    // });
  
    // it("should validate email field", () => {
    //   // Enter an invalid email
    //   cy.get('input[name="email"]').type("invalidemail");
    //   cy.get('button[type="submit"]').click();
  
    //   cy.get(".ant-form-item-explain").should(
    //     "contain",
    //     "Please enter a valid Email"
    //   );
  
    //   // Enter a valid email
    //   cy.get('input[name="email"]').clear().type("test@example.com");
    //   cy.get('button[type="submit"]').click();
  
    //   cy.get(".ant-form-item-explain").should(
    //     "not.contain",
    //     "Please enter a valid Email"
    //   );
    // });
  
    // it("should validate password fields", () => {
    //   // Enter different passwords in password and confirm password fields
    //   cy.get('input[name="password"]').type("password1");
    //   cy.get('input[name="confirm"]').type("password2");
    //   cy.get('button[type="submit"]').click();
  
    //   cy.get(".ant-form-item-explain").should(
    //     "contain",
    //     "Passwords do not match!"
    //   );
  
    //   // Enter matching passwords
    //   cy.get('input[name="password"]').clear().type("password");
    //   cy.get('input[name="confirm"]').clear().type("password");
    //   cy.get('button[type="submit"]').click();
  
    //   cy.get(".ant-form-item-explain").should(
    //     "not.contain",
    //     "Passwords do not match!"
    //   );
    // });
  
    it("should submit the form successfully", () => {
      // Fill in all required fields
    //   cy.get('input[name="nameEng"]').type("John Doe");
    //   cy.get('input[name="phone"]').type("1234567890");
    cy.get(".FormOnly").find("#Username").type("consultant@gmail.com");
    cy.get(".FormOnly").find("#Password").type("bpstest321");
    //   cy.get('input[name="confirm"]').type("password");
    //   cy.get('input[name="panNo"]').type("ABCDE1234F");
    //   cy.get('input[name="cNo"]').type("12345678");
    //   cy.get('input[name="cIDistrict"]').type("Kathmandu");
    //   cy.get('input[name="cDate"]').type("2079-01-01");
    //   cy.get('input[name="personImage"]').attachFile("user_photo.jpg");
    //   cy.get('input[name="citizenshipImage"]').attachFile("citizenship.jpg");
    cy.get(".FormOnly").find('button[type="submit"]').click();
      // Assert that the form is successfully submitted and the user is redirected to a new page
    //   cy.wait();
        cy.url().should("include", "/user"); // Replace '/admin-dashboard' with the expected URL of the success page
        // cy.get(':nth-child(1) > .ant-message-notice-content > .ant-message-custom-content > :nth-child(2)').should("contain", "Incorrect");
        cy.get('p').should("contain", "Project")
        // cy.get('.NavBarLinks > :nth-child(4)').click();
        cy.get('[style="opacity: 1; order: 2;"]').trigger('mouseover')
        cy.get('a[href="/public/login"]').click();
        cy.url().should("include", "/login");
    });
  });
  