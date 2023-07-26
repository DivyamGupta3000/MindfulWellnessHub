const urlParams = new URLSearchParams(window.location.search);
		const fruitsDiv = document.getElementById('fruitsgood');
        const jobDiv = document.getElementById('fruitsavg');
        const baseDiv = document.getElementById('fruitsbad');
		let fruitsHTML = '';
        let fruitsHTML1 = '';
        let fruitsHTML2 = '';


        const fruits = urlParams.get('fruits');
			if (fruits == "1") {
				fruitsHTML += '<li>You have a perfect sleeping hours.</li>';
                fruitsDiv.innerHTML = fruitsHTML;
			} else if (fruits == "2") {
				fruitsHTML1 += '<li>Its good to have this much sleep but sleeping too much can effect your productivity. </li>';
                jobDiv.innerHTML = fruitsHTML1;
			} else if (fruits == "3") {
				fruitsHTML2 += '<li>Try to increase sleep hours, your body and mind both need some rest.</li>';
                baseDiv.innerHTML = fruitsHTML2;
			}


        const job = urlParams.get('job');
			if (job == "1") {
				fruitsHTML += '<li>You are one of those who are able to achieve a stress free profession.</li>';
                fruitsDiv.innerHTML = fruitsHTML;
			} else if (job == "2") {
				fruitsHTML1 += '<li>Spend time on those things that make you happy.</li>';
                jobDiv.innerHTML = fruitsHTML1;
			} else if (job == "3") {
				fruitsHTML2 += '<li>Its good if you are going through hard time to achieve something.but if its not with your will, its not fruitful.</li>';
                baseDiv.innerHTML = fruitsHTML2;
			}
            
            const food = urlParams.get('food');
                if (food === "1") {
                    fruitsHTML += '<li>You care for your diet.</li>';
                    fruitsDiv.innerHTML = fruitsHTML;
                } else if (food == "2") {
                    fruitsHTML1 += '<li>Outside food is not always harmful but try to avoid too much oily food.</li>';
                    jobDiv.innerHTML = fruitsHTML1;
                } else if (food === "3") {
                    fruitsHTML2 += '<li>Focus on your diet, try not to eat outside.</li>';
                    baseDiv.innerHTML = fruitsHTML2;
                }

            const exer = urlParams.get('exer');
            const phys = urlParams.get('phys');
            if (exer == "1"&phys==1) {
                fruitsHTML += '<li>You have an active lifestyle and you still focus on exercise.</li>';
                    fruitsDiv.innerHTML = fruitsHTML;
             }else if ((exer == "2"||exer=="3")&phys=="1") {
                fruitsHTML += '<li>You already have an active profession so you do not need to focus on any other exercise.</li>';
                    fruitsDiv.innerHTML = fruitsHTML;
             }else if (phys == "2") {
				fruitsHTML1 += '<li>You will still require some exersice.As your profession is not very active on it.</li>';
                jobDiv.innerHTML = fruitsHTML1;
			} else if (phys == "3") {
                fruitsHTML2 += '<li>Your body require some exersice.</li>';
                baseDiv.innerHTML = fruitsHTML2;
			}else if (exer == "1") {
                fruitsHTML += '<li>You work hard to keep yourself fit.</li>';
                    fruitsDiv.innerHTML = fruitsHTML;
                    
                }else if (exer == "2") {
                    fruitsHTML1 += '<li>You will still require some exersice.</li>';
                    jobDiv.innerHTML = fruitsHTML1;
                } else if (exer == "3") {
                    fruitsHTML2 += '<li>You will definitely require some exersice.</li>';
                    baseDiv.innerHTML = fruitsHTML2;
                }
            
            
            const fri = urlParams.get('fri');
        if (fri == "1") {
            fruitsHTML += '<li>You have friends and family to help you around.</li>';
                fruitsDiv.innerHTML = fruitsHTML;
			} else if (fri == "2") {
				fruitsHTML1 += '<li>More friend, means more variety of knowledge and hobby you can have. </li>';
                jobDiv.innerHTML = fruitsHTML1;
			} else if (fri == "3") {
                fruitsHTML2 += '<li>A little more social interaction can improve your stress level.</li>';
                baseDiv.innerHTML = fruitsHTML2;
			}


            const sree = urlParams.get('sree');
        if (sree == "1") {
            fruitsHTML += '<li>You keep yourself off from the screens which is good for your focus and eyesight.</li>';
                fruitsDiv.innerHTML = fruitsHTML;
			} else if (sree == "2") {
				fruitsHTML1 += '<li>You do not bound to spend hours on a screen but try to keep it at that. </li>';
                jobDiv.innerHTML = fruitsHTML1;
			} else if (sree == "3") {
                fruitsHTML2 += '<li>Reduce your screen time as much as possible,spend some time outside once in a while.</li>';
                baseDiv.innerHTML = fruitsHTML2;
			}


            const drs = urlParams.get('drs');
        if (drs == "1") {
            fruitsHTML += '<li>You do not drink or smoke.</li>';
                fruitsDiv.innerHTML = fruitsHTML;
			} else if (drs == "2") {
				fruitsHTML1 += '<li>Try to keep your smoking or drinking as low as they are.</li>';
                jobDiv.innerHTML = fruitsHTML1;
			} else if (drs == "3") {
                fruitsHTML2 += '<li>You should work on your smoking and drinking habits.</li>';
                baseDiv.innerHTML = fruitsHTML2;
			}

        
            const hob = urlParams.get('hob');
            if (hob == "1") {
                fruitsHTML += '<li>You are able to spend your times on some hobbies.</li>';
                    fruitsDiv.innerHTML = fruitsHTML;
                } else if (hob == "2" || hob == "3") {
                    fruitsHTML1 += '<li>Spending time on your hobby shows that you are not bound to a laboured life.</li>';
                    jobDiv.innerHTML = fruitsHTML1;
                }