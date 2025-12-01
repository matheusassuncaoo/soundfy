import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { Song } from "../types";
import { colors, spacing } from "../constants";

interface SongCardProps {
  song: Song;
  onPress?: () => void;
}

export function SongCard({ song, onPress }: SongCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Image
        source={song.image}
        style={styles.image}
        contentFit="cover"
        cachePolicy="memory-disk"
      />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {song.title}
        </Text>
        <Text style={styles.artist} numberOfLines={1}>
          {song.artist}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: spacing.md,
    width: 160,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.8,
  },
  image: {
    width: "100%",
    height: 160,
    backgroundColor: colors.tertiary,
  },
  content: {
    padding: spacing.sm,
  },
  title: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: "600",
    marginBottom: spacing.xs,
  },
  artist: {
    color: colors.text.secondary,
    fontSize: 12,
  },
});
