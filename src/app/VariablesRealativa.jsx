"use client";
import { DateTime } from "luxon";
import { useSelector } from "react-redux";

export default function VariablesRelativas() {
  const infoFf = useSelector((state) => state.infoF.carga);

  if (!infoFf?.data?.hourly) {
    // Devuelve valores seguros para evitar el error
    return { temperaturer: null, humidity: null, wind: null };
  }

  const now = DateTime.now().setZone(infoFf.data.timezone);
  const times = infoFf.data.hourly.time;

  let closestIndex = 0;
  let minDiff = Infinity;

  times.forEach((t, i) => {
    const diff = Math.abs(
      DateTime.fromISO(t, { zone: infoFf.data.timezone })
        .diff(now, "minutes")
        .minutes
    );
    if (diff < minDiff) {
      minDiff = diff;
      closestIndex = i;
    }
  });

  return {
    temperaturer: infoFf.data.hourly.temperature_2m[closestIndex],
    humidity: infoFf.data.hourly.relative_humidity_2m[closestIndex],
    wind: infoFf.data.hourly.windspeed_10m[closestIndex],
    precipitations : infoFf.data.hourly.precipitation[closestIndex]
  };
}