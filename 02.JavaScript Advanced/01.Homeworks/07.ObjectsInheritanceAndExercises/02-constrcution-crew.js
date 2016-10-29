function constructionCrew(input) {
    let worker = {
        weight: Number(input.weight),
        experience: Number(input.experience),
        bloodAlcoholLevel: Number(input.bloodAlcoholLevel),
        handsShaking: input.handsShaking
    };
    let currentWorker = Object.create(worker);
    if(currentWorker.handsShaking == true){
        currentWorker.bloodAlcoholLevel += currentWorker.weight * currentWorker.experience * 0.1;
        currentWorker.handsShaking = false;
    }
    return currentWorker;
}
