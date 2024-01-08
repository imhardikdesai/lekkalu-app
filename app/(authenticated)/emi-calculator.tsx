import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons'
import { router } from 'expo-router'
import { useTheme } from 'tamagui'
import { THEME_COLORS } from '@/utils/theme'
import { hp, wp } from '@/utils/responsive'
import EmiCalculatorFormula from '@/components/emi-calculator-formula'
import EmiCalculatorForm from '@/components/emi-calculator-form'
import EmiCalculatorChartCard from '@/components/emi-calculator-chart-card/emi-calculator-chart-card'
import KeyboardScrollView from '@/components/keyboard-scroll-view'

const EmiCalculator = () => {
  const theme = useTheme()
  return (
    <SafeAreaView edges={['top']} style={[styles.container, { backgroundColor: theme.backgroundHover.val }]}>
      <KeyboardScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity onPress={router.back} style={styles.back}>
          <Entypo name="chevron-thin-left" size={wp(5)} color={theme.foreground.val} />
        </TouchableOpacity>
        <EmiCalculatorChartCard />
        <EmiCalculatorForm />
        <EmiCalculatorFormula />
      </KeyboardScrollView>
    </SafeAreaView>
  )
}

export default EmiCalculator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(2),
  },
  back: {
    height: wp(10),
    width: wp(10),
    backgroundColor: THEME_COLORS.primary[100] + 20,
    borderRadius: wp(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp(5),
  },
  scrollContent: { paddingBottom: hp(4) },
})
