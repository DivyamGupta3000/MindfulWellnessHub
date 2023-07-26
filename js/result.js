
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fruits = document.querySelectorAll('input[name="fruit"]:checked');
    const selectedFruits = [];
    fruits.forEach((fruit) => {
        selectedFruits.push(fruit.value);
    });


    const job = document.querySelectorAll('input[name="job"]:checked');
    const selectedJob = [];
    job.forEach((job) => {
        selectedJob.push(job.value);
    });

    
    const food = document.querySelectorAll('input[name="food"]:checked');
    const selectedfood = [];
    food.forEach((food) => {
        selectedfood.push(food.value);
    });
    

    const phys = document.querySelectorAll('input[name="phys"]:checked');
    const selectedPhys = [];
    phys.forEach((phys) => {
        selectedPhys.push(phys.value);
    });


    const fri = document.querySelectorAll('input[name="fri"]:checked');
    const selectedfri = [];
    fri.forEach((fri) => {
        selectedfri.push(fri.value);
    });


    const exer = document.querySelectorAll('input[name="exer"]:checked');
    const selectedexer = [];
    exer.forEach((exer) => {
        selectedexer.push(exer.value);
    });


    const sree = document.querySelectorAll('input[name="sree"]:checked');
    const selectedsree = [];
    sree.forEach((sree) => {
        selectedsree.push(sree.value);
    });


    const drs = document.querySelectorAll('input[name="drs"]:checked');
    const selecteddrs = [];
    drs.forEach((drs) => {
        selecteddrs.push(drs.value);
    });


    const hob = document.querySelectorAll('input[name="hob"]:checked');
    const selectedhob = [];
    hob.forEach((hob) => {
        selectedhob.push(hob.value);
    });

    window.location.href = `final1.html?fruits=${selectedFruits.join(',')}&job=${selectedJob.join(',')}&food=${selectedfood.join(',')}&phys=${selectedPhys.join(',')}&fri=${selectedfri.join(',')}&exer=${selectedexer.join(',')}&sree=${selectedsree.join(',')}&drs=${selecteddrs.join(',')}&hob=${selectedhob.join(',')}`;


});