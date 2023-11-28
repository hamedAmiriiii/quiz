// import { AvatarLogo } from "@utils";
// import { Avatar as NAvatar } from "native-base";
// import React, { useEffect, useState } from "react";
// import { Pressable } from "react-native";


// const Avatar = ({ onPress, uri, local, ...rest }) => {
//   const [image, setImage] = useState(uri);

//   useEffect(() => {
//     setImage(uri);
//   }, [uri]);
//   return (
//     <Pressable onPress={onPress}>
//       <NAvatar
//         borderWidth={1}
//         borderColor="border.muted"
//         source={
//           local
//             ? { uri: `data:image/jpeg;base64,${local}` }
//             : image && !local
//             ? {
//                 uri: image,
//               }
//             : AvatarLogo
//         }
//         {...rest}
//       />
//     </Pressable>
//   );
// };

// export default Avatar;
