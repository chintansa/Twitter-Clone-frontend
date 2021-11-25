/* eslint-disable no-labels */
/* eslint-disable no-unreachable */
import owner from './data/profile.json';

const initialState = {
    profile: owner
};


const profile = (state = initialState, action) =>{
            console.log("Act type: "+ action.type)
             console.log("Act input: " + action.newInput)
         
    switch(action.type){
        case 'fetch-profile':
            return({
                    profile: action.profile
                })
        case 'save':
            console.log("inside save -- - - - -- - - -");
                
            // if(action.newInput.name){
            //     state.profile['firstName'] = action.newInput['name'];
            // }
            // if(action.newInput.bio){
            //     state.profile['bio'] = action.newInput['bio'];
            // }
            // if(action.newInput.location){
            //     state.profile['location'] = action.newInput['location'];
            // }
            // if(action.newInput.dateOfBirth){
            //     state.profile['dateOfBirth'] =action.newInput['dateOfBirth'];
            // }
            // if(action.newInput.website){
            //     state.profile['website'] = action.newInput['website'];
            // }

            return {
                ...state,
                   
            }; 
            break;
        default:
            return (state)
                    
                     
                
    }
}

export default profile;


// const profile = (state = profileData, action) =>{
//     console.log(action.newInput)
//     console.log(state)
//     switch(action.type){
//         case 'save-information':
//             const newProfileData = {};
//             if(action.newInput.name){
//                 newProfileData['firstName'] = action.newInput['name'].split(" ")[0];
//                 newProfileData['lastName'] = action.newInput['name'].split(" ")[1];
//             }
//             return {
//                     ...state,
//                     ...action.newInput,
//                     ...newProfileData
//             };        
//             default:
//                 return (state)
//     }
// }