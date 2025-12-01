import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing } from "../constants";

interface SectionHeaderProps {
  title: string;
  onViewAll?: () => void;
}

export function SectionHeader({ title, onViewAll }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {onViewAll && (
        <Pressable
          onPress={onViewAll}
          style={({ pressed }) => pressed && styles.pressed}
        >
          <View style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>Ver tudo</Text>
            <Ionicons
              name="chevron-forward"
              size={16}
              color={colors.primary}
              style={styles.icon}
            />
          </View>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
    marginTop: spacing.md,
  },
  title: {
    color: colors.text.primary,
    fontSize: 18,
    fontWeight: "700",
  },
  pressed: {
    opacity: 0.7,
  },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  viewAllText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "600",
  },
  icon: {
    marginTop: 2,
  },
});
