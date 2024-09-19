const logoutButton = document.getElementById('logout-button');

// Add a log to check if the button is being clicked
logoutButton.addEventListener('click', () => {
    console.log('Logout button clicked');
    
    // Remove the logged-in user ID from local storage
    localStorage.removeItem('loggedInUserId');

    // Sign out the user from Firebase Authentication
    signOut(auth)
    .then(() => {
        console.log('User signed out successfully');
        // Redirect to index.html (login page)
        window.location.href = 'index.html';  // Ensure this file exists and is accessible
    })
    .catch((error) => {
        // Handle any errors during the sign-out process
        console.error('Error Signing out:', error);
    });
});
