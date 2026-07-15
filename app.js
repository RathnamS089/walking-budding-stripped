// Paste your config from Firebase Console


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

// Triggered by index.html
function initiateLogin() {
    auth.signInWithPopup(provider)
        .then((result) => {
            db.collection("users").doc(result.user.uid).set({
                email: result.user.email,
                status: "onboarding-started"
            }, { merge: true }).then(() => window.location.href = "onboarding.html");
        });
}

// Triggered by onboarding.html (saves 10 answers)
function saveSurvey(answers) {
    const uid = auth.currentUser.uid;
    db.collection("users").doc(uid).update({
        surveyAnswers: answers,
        status: "survey-complete"
    }).then(() => window.location.href = "phone.html");
}