import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

export default async index => {
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  if (status !== "granted") {
    alert("failed to get library asset, please enable and restart demo");
    return;
  }
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1
  });

  return result.uri;
};
