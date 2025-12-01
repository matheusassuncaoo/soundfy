import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  SongCard,
  PlaylistCard,
  SectionHeader,
  HorizontalScroll,
} from "../components";
import { colors, spacing } from "../constants";
import { mockSectionsData, mockPlaylists } from "../mocks/mockData";

export default function Home() {
  const sections = useMemo(() => mockSectionsData, []);

  const handlePlaylistPress = (playlistId: string) => {
    console.log("Playlist pressed:", playlistId);
  };

  const handleSongPress = (songId: string) => {
    console.log("Song pressed:", songId);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Bem-vindo</Text>
          <View style={styles.headerActions}>
            <Pressable style={({ pressed }) => pressed && styles.pressed}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color={colors.text.primary}
              />
            </Pressable>
            <Pressable style={({ pressed }) => pressed && styles.pressed}>
              <Ionicons
                name="settings-outline"
                size={24}
                color={colors.text.primary}
              />
            </Pressable>
          </View>
        </View>

        {/* Featured Playlist Banner */}
        <View style={styles.bannerContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.banner,
              pressed && styles.bannerPressed,
            ]}
          >
            <View style={styles.bannerContent}>
              <Text style={styles.bannerTitle}>Seleção Especial</Text>
              <Text style={styles.bannerSubtitle}>
                Descubra novas músicas curadas para você
              </Text>
              <Pressable style={styles.playButton}>
                <Ionicons
                  name="play-sharp"
                  size={16}
                  color={colors.background}
                />
                <Text style={styles.playButtonText}>Reproduzir</Text>
              </Pressable>
            </View>
          </Pressable>
        </View>

        {/* Sections */}
        {sections.map((section) => (
          <View key={section.id}>
            <SectionHeader
              title={section.title}
              onViewAll={() => console.log("View all:", section.id)}
            />

            {section.id === "featured" ? (
              // Playlists Section (Vertical)
              <View style={styles.verticalsection}>
                {mockPlaylists.map((playlist) => (
                  <PlaylistCard
                    key={playlist.id}
                    playlist={playlist}
                    onPress={() => handlePlaylistPress(playlist.id)}
                  />
                ))}
              </View>
            ) : (
              // Songs Section (Horizontal Scroll)
              <HorizontalScroll>
                {section.items.map((item) => (
                  <SongCard
                    key={item.id}
                    song={item as any}
                    onPress={() => handleSongPress(item.id)}
                  />
                ))}
              </HorizontalScroll>
            )}
          </View>
        ))}

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.lg,
  },
  greeting: {
    color: colors.text.primary,
    fontSize: 28,
    fontWeight: "700",
  },
  headerActions: {
    flexDirection: "row",
    gap: spacing.md,
  },
  pressed: {
    opacity: 0.7,
  },
  bannerContainer: {
    paddingHorizontal: spacing.md,
    marginBottom: spacing.xl,
  },
  banner: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    overflow: "hidden",
    minHeight: 160,
    justifyContent: "center",
  },
  bannerPressed: {
    opacity: 0.8,
  },
  bannerContent: {
    padding: spacing.lg,
  },
  bannerTitle: {
    color: colors.background,
    fontSize: 22,
    fontWeight: "700",
    marginBottom: spacing.xs,
  },
  bannerSubtitle: {
    color: colors.background,
    fontSize: 14,
    opacity: 0.9,
    marginBottom: spacing.md,
  },
  playButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 20,
    alignSelf: "flex-start",
    gap: spacing.sm,
  },
  playButtonText: {
    color: colors.primary,
    fontWeight: "600",
    fontSize: 14,
  },
  verticalsection: {
    paddingHorizontal: spacing.md,
    marginBottom: spacing.lg,
  },
  bottomSpacing: {
    height: spacing.xl,
  },
});
