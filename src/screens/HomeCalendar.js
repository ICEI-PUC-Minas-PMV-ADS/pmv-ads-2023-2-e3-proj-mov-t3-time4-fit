import {Calendar} from "react-native-calendars";
import {getFormattedDate} from "../util/date";
import {StyleSheet, View} from "react-native";

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
                              disableTouchEvent: true,
                              selectedColor: '#7D9C3E',
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
        backgroundColor: 'white',
        paddingTop: '10%',
    }
})
