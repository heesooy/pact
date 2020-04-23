import React from 'react';
import { TouchableRipple, Text } from 'react-native-paper';
import { View } from 'react-native';
import styles from './styles';

type Props = {
  checkin: any;
}

function formatDateString(num: number, unit: string): string {
  return `${num} ${unit}${num > 1 ? 's' : ''} ago`;
}

const timeSince = (timestamp: number): string => {
  const date = new Date(timestamp);
  const secondsAgo = Math.floor((new Date() - date) / 1000);

  const numYears = Math.floor(secondsAgo / 31536000);
  if (numYears >= 1) {
    return formatDateString(numYears, 'year');
  }

  const numMonths = Math.floor(secondsAgo / 2628000);
  if (numMonths >= 1) {
    return formatDateString(numMonths, 'month');
  }

  const numDays = Math.floor(secondsAgo / 86400);
  if (numDays >= 1) {
    return formatDateString(numDays, 'day');
  }

  const numHours = Math.floor(secondsAgo / 3600);
  if (numHours >= 1) {
    return formatDateString(numHours, 'hour');
  }

  const numMinutes = Math.floor(secondsAgo / 60);
  if (numMinutes >= 1) {
    return formatDateString(numMinutes, 'minute');
  }

  return formatDateString(secondsAgo, 'second');
};

const Checkin: React.FC<Props> = ({ checkin }) => (
  <View style={styles.container}>
    <TouchableRipple
      style={styles.circle}
      rippleColor="rgba(0, 0, 0, .32)">
      <View styles={styles.innerView}>
        <Text style={styles.checkinMeta}>
          {checkin.username} ({timeSince(checkin.timestamp)})
        </Text>

        <Text style={styles.checkinText}>
          {checkin.comments}
        </Text>
      </View>
    </TouchableRipple>
  </View>
);

export default Checkin;
