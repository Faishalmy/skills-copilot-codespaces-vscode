function skillsMember()    {
    // If the user is not a member, redirect to the login page
    if (member != true) {
        window.location.replace("/login");
    }
}