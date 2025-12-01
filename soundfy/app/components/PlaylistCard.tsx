import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { Playlist } from "../types";
import { colors, spacing } from "../constants";

interface PlaylistCardProps {
  playlist: Playlist;
  onPress?: () => void;
}

export function PlaylistCard({ playlist, onPress }: PlaylistCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={styles.imageContainer}>
        <Image
          source={playlist.image}
          style={styles.image}
          contentFit="cover"
          cachePolicy="memory-disk"
        />
        <View style={styles.overlay} />
        <Ionicons
          name="play-circle"
          size={40}
          color={colors.primary}
          style={styles.playIcon}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {playlist.title}
        </Text>
        <Text style={styles.description} numberOfLines={1}>
          {playlist.songs.length} músicas
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
    backgroundColor: colors.secondary,
    borderRadius: 12,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.7,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 180,
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.tertiary,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  playIcon: {
    position: "absolute",
    bottom: spacing.md,
    right: spacing.md,
  },
  content: {
    padding: spacing.md,
  },
  title: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: spacing.xs,
  },
  description: {
    color: colors.text.secondary,
    fontSize: 13,
  },
});
