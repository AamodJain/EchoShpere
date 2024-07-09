function getFirstAndLastName(fullName) {
    // Split the full name by spaces
    // console.log(fullName);
    const nameParts = fullName.trim().split(' ');
  
    // Get the first name (first part of the array)
    const firstName = nameParts[0];
  
    // Get the last name (last part of the array)
    // In case there's only one part, the last name will be an empty string
    const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
  
    return { firstName, lastName };
  }

  export default getFirstAndLastName;