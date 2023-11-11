import {Calendar} from "react-native-calendars";
import {getFormattedDate} from "../util/date";
import {StyleSheet, View} from "react-native";
import {GlobalStyles} from "../constants/styles";
import {LocaleConfig} from "react-native-calendars/src/index";

LocaleConfig.locales['pt-BR'] = {

}

function HomeCalendar({navigation, route}) {
    const selectedDate = route.params.current;
    const today = getFormattedDate(new Date());

    function onDayPressHandler(day) {
        navigation.navigate({
            name: 'Home',
            params: {
                selectedDate: day.dateString,
            },
            merge: true,
        });
    }

    return (
        <View style={styles.container}>
            <Calendar onDayPress={onDayPressHandler}
                      maxDate={today}
                      current={selectedDate}
                      markedDates={{
                          [selectedDate]: {
                              selected: true,
                              disableTouchEvent: false,
                              selectedColor: GlobalStyles.colors.primary,
                              selectedTextColor: 'white',
                          }
                      }}
            />
        </View>
    )
}

export default HomeCalendar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.background,
        paddingTop: '10%',
    }
})
