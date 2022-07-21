async function makeRequest() {
    try {
        const response = await fetch('testurl');
        if (response.ok == false) {
            throw new Error`${(response.status)} ${response.statusText}`
        }
        
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}