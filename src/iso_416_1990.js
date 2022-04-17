class ProcessPhase1 {
    constructor(nominal, length) {
        this.length = length;
        this.nominal = nominal

        // basic attributes 
        const fixed_args = {
            m5: {
                d1: 2.16,
                d3: 6.02,
                d4: 3.98,
                d6: 1.25,
                d5: 3.5,
                diameter: 5,
                bolt_head_volume: 310.57,
            },
            m6: {
                d1: 2.56,
                d3: 7.76,
                d4: 4.85,
                d6: 1.5,
                d5: 3.9,
                diameter: 6,
                bolt_head_volume: 505.18,
            },
            m8: {
                d1: 2.56,
                d3: 7.76,
                d4: 4.85,
                d6: 1.5,
                d5: 3.9,
                diameter: 8,
                bolt_head_volume: 963.12,
            },
            m10: {
                d1: 4.36,
                d3: 9.82,
                d4: 6.53,
                d6: 2.5,
                d5: 6.5,
                diameter: 10,
                bolt_head_volume: 1789.76,
            },
            m12: {
                d1: 5.21,
                d3: 12.24,
                d4: 7.3,
                d6: 3,
                d5: 7.5,
                diameter: 12,
                bolt_head_volume: 2982.77,
            },
            m14: {
                d1: 6.11,
                d3: 7.3,
                d4: 8.14,
                d6: 3.5,
                d5: 9,
                diameter: 14,
                bolt_head_volume: 4575.73,
            },
            m16: {
                d1: 7.11,
                d3: 16.91,
                d4: 10.85,
                d6: 4,
                d5: 10.4,
                diameter: 16,
                bolt_head_volume: 7141.89,
            }
        }

        // dimensions
        this.d1 = fixed_args[nominal].d1
        this.d2 = length
        this.d3 = fixed_args[nominal].d3 //head_length1
        this.d4 = fixed_args[nominal].d4 //head_length2
        this.d6 = fixed_args[nominal].d6
        this.d5 = fixed_args[nominal].d5 //head_radius

        this.diameter = fixed_args[nominal].diameter
        this.radius = this.diameter / 2

        this.bolt_head_volume = fixed_args[nominal].bolt_head_volume
        this.bolt_shank_volume = Math.pow(this.d1, 2) * Math.PI * length
        this.total_volume = this.bolt_head_volume + this.bolt_shank_volume

        this.head_length = this.d3 + this.d4
        this.head_outter_radius = this.d5
        this.strain = Math.abs(Math.log(
            (this.head_length) / 
            (this.bolt_head_volume / (Math.pow(this.radius, 2) * Math.PI)))
        )
        this.k = 2.7
        this.A = Math.pow(this.head_outter_radius, 2) * Math.PI
        this.Yf = 854.38* Math.pow(this.strain, 0.1673)
        this.forging_power = this.k * this.Yf * this.A // 鍛造力    
    }
}

class ProcessPhase2 {
    constructor(nominal, length) {
        this.length = length;
        this.nominal = nominal

        const fixed_args = {
            m5: {
                d1: 2.18,
                d4: 6.1,
                d6: 2.9,
                d7: 3.95,
                d8: 0.5,
                diameter: 5,
                bolt_head_volume: 310.57,
            },
            m6: {
                d1: 2.58,
                d4: 7.84,
                d6: 3.5,
                d7: 4.45,
                d8: 0.5,
                diameter: 6,
                bolt_head_volume: 505.18,
            },
            m8: {
                d1: 3.48,
                d4: 9.26,
                d6: 4.7,
                d7: 5.65,
                d8: 0.5,
                diameter: 8,
                bolt_head_volume: 963.12,
            },
            m10: {
                d1: 4.36,
                d4: 9.9,
                d6: 5.9,
                d7: 7.45,
                d8: 0.5,
                diameter: 10,
                bolt_head_volume: 1789.76,
            },
            m12: {
                d1: 5.23,
                d4: 12.32,
                d6: 7.1,
                d7: 8.55,
                d8: 1,
                diameter: 12,
                bolt_head_volume: 2982.77,
            },
            m14: {
                d1: 6.13,
                d4: 12.94,
                d6: 8.3,
                d7: 10.25,
                d8: 1,
                diameter: 14,
                bolt_head_volume: 4575.73,
            },
            m16: {
                d1: 7.13,
                d4: 16.99,
                d6: 9.5,
                d7: 11.95,
                d8: 1,
                diameter: 16,
                bolt_head_volume: 7141.89,
            }
        }

        this.d1 = fixed_args[nominal].d1
        this.d2 = length
        this.d3 = 80
        this.d4 = fixed_args[nominal].d4 //head_length
        this.d5 = 70
        this.d6 = fixed_args[nominal].d6
        this.d7 = fixed_args[nominal].d7 //head_radius
        this.d8 = fixed_args[nominal].d8  

        this.diameter = fixed_args[nominal].diameter
        this.radius = this.diameter / 2
       
        this.bolt_head_volume = fixed_args[nominal].bolt_head_volume
        this.bolt_shank_volume = Math.pow(this.d1, 2) * Math.PI * length
        this.total_volume = this.bolt_head_volume + this.bolt_shank_volume

        this.head_length = this.d4
        this.head_outter_radius = this.d7
        this.strain = Math.abs(Math.log(
            (this.head_length) / 
            (this.bolt_head_volume / (Math.pow(this.radius, 2) * Math.PI)))
        )
        this.k = 2.6
        this.A = Math.pow(this.head_outter_radius, 2) * Math.PI
        this.Yf = 854.38* Math.pow(this.strain, 0.1673)
        this.forging_power = this.k * this.Yf * this.A // 鍛造力    

        console.log(this)
    }
}


class ProcessPhase3 {
    constructor(nominal, length) {
        this.length = length;
        this.nominal = nominal

        const fixed_args = {
            m5: {
                d1: 2.2,
                d5: 4,
                d6: 3,
                d7: 6.5,
                d8: 4.6,
                d9: 0.5,
                d12: 3,
                diameter: 5,
                bolt_head_volume: 310.57,
            },
            m6: {
                d1: 2.6,
                d5: 4.5,
                d6: 3.8,
                d7: 7.5,
                d8: 5.6,
                d9: 0.6,
                d12: 3.6,
                diameter: 6,
                bolt_head_volume: 505.18,
            },
            m8: {
                d1: 3.5,
                d5: 5.7,
                d6: 4.2,
                d7: 9.5,
                d8: 7,
                d9: 0.8,
                d12: 4.8,
                diameter: 8,
                bolt_head_volume: 963.12,
            },
            m10: {
                d1: 4.4,
                d5: 7.5,
                d6: 4.22,
                d7: 12.5,
                d8: 8,
                d9: 1,
                d12: 6,
                diameter: 10,
                bolt_head_volume: 1789.76,
            },
            m12: {
                d1: 5.25,
                d5: 8.6,
                d6: 5.19,
                d7: 14.5,
                d8: 9.9,
                d9: 1.2,
                d12: 7.2,
                diameter: 12,
                bolt_head_volume: 2982.77,
            },
            m14: {
                d1: 6.15,
                d5: 10.3,
                d6: 5.36,
                d7: 17.5,
                d8: 10.7,
                d9: 1.4,
                d12: 8.4,
                diameter: 14,
                bolt_head_volume: 4575.73,
            },
            m16: {
                d1: 7.15,
                d5: 12,
                d6: 5.91,
                d7: 20.5,
                d8: 12.5,
                d9: 1.6,
                d12: 9.6,
                diameter: 16,
                bolt_head_volume: 7141.89,
            }
        }

        this.d1 = fixed_args[nominal].d1
        this.d2 = length
        this.d3 = 50
        this.d4 = 82.5
        this.d5 = fixed_args[nominal].d5
        this.d6 = fixed_args[nominal].d6
        this.d7 = fixed_args[nominal].d7
        this.d8 = fixed_args[nominal].d8
        this.d9 = fixed_args[nominal].d9
        this.d10 = 20
        this.d11 = 50
        this.d12 = fixed_args[nominal].d12

        this.diameter = fixed_args[nominal].diameter
        this.radius = this.diameter / 2
       
        this.bolt_head_volume = fixed_args[nominal].bolt_head_volume
        this.bolt_shank_volume = Math.pow(this.d1, 2) * Math.PI * length
        this.total_volume = this.bolt_head_volume + this.bolt_shank_volume

        this.head_length = this.d6 + this.d8
        this.head_outter_radius = this.d5
        this.strain = Math.abs(Math.log(
            (this.head_length) / 
            (this.bolt_head_volume / (Math.pow(this.radius, 2) * Math.PI)))
        )
        this.k = 2.4
        this.A = Math.pow(this.head_outter_radius, 2) * Math.PI
        this.Yf = 854.38* Math.pow(this.strain, 0.1673)
        this.forging_power = this.k * this.Yf * this.A // 鍛造力    

        console.log(this)
    }
}

class ProcessPhase4 {
    constructor(nominal, length) {
        this.length = length;
        this.nominal = nominal

        const fixed_args = {
            m5: {
                d1: 2.22,
                d2: 5.7,
                d3: 1,
                d5: 0.5,
                d6: 1.8,
                d9: 7,
                d10: 5.6,
                d11: 0.5,
                d12: 0.3,
                d15: 3,
                d16: 0.3,
                diameter: 5,
                bolt_head_volume: 310.57,
            },
            m6: {
                d1: 2.62,
                d2: 6.8,
                d3: 1.1,
                d5: 0.6,
                d6: 2.1,
                d9: 8,
                d10: 6.8,
                d11: 0.6,
                d12: 0.4,
                d15: 3.6,
                d16: 0.4,
                diameter: 6,
                bolt_head_volume: 505.18,
            },
            m8: {
                d1: 3.52,
                d2: 8.5,
                d3: 1.2,
                d5: 0.8,
                d6: 2.8,
                d9: 10,
                d10: 8.5,
                d11: 0.8,
                d12: 0.6,
                d15: 4.8,
                d16: 0.5,
                diameter: 8,
                bolt_head_volume: 963.12,
            },
            m10: {
                d1: 4.42,
                d2: 10.4,
                d3: 1.5,
                d5: 1,
                d6: 3.4,
                d9: 13,
                d10: 9.7,
                d11: 1,
                d12: 0.8,
                d15: 6,
                d16: 0.6,
                diameter: 10,
                bolt_head_volume: 1789.76,
            },
            m12: {
                d1: 5.27,
                d2: 12.35,
                d3: 1.8,
                d5: 1.2,
                d6: 4.1,
                d9: 15,
                d10: 11.9,
                d11: 1.2,
                d12: 1,
                d15: 7.2,
                d16: 0.7,
                diameter: 12,
                bolt_head_volume: 2982.77,
            },
            m14: {
                d1: 6.17,
                d2: 14.3,
                d3: 2.1,
                d5: 1.4,
                d6: 4.8,
                d9: 18,
                d10: 12.9,
                d11: 1.4,
                d12: 1.2,
                d15: 8.4,
                d16: 0.9,
                diameter: 14,
                bolt_head_volume: 4575.73,
            },
            m16: {
                d1: 7.17,
                d2: 16.4,
                d3: 2.4,
                d5: 1.6,
                d6: 5.6,
                d9: 21,
                d10: 15.1,
                d11: 1.6,
                d12: 1.4,
                d15: 9.6,
                d16: 1,
                diameter: 16,
                bolt_head_volume: 7141.89,
            }
        }

        this.d1 = fixed_args[nominal].d1
        this.d2 = fixed_args[nominal].d2
        this.d3 = fixed_args[nominal].d3
        this.d4 = 20
        this.d5 = fixed_args[nominal].d5
        this.d6 = fixed_args[nominal].d6
        this.d7 = 30
        this.d8 = length
        this.d9 = fixed_args[nominal].d9
        this.d10 = fixed_args[nominal].d10
        this.d11 = fixed_args[nominal].d11
        this.d12 = fixed_args[nominal].d12
        this.d13 = 20
        this.d14 = 50 
        this.d15 = fixed_args[nominal].d15 
        this.d16 = fixed_args[nominal].d16

        this.diameter = fixed_args[nominal].diameter
        this.radius = this.diameter / 2
       
        this.bolt_head_volume = fixed_args[nominal].bolt_head_volume
        this.bolt_shank_volume = Math.pow(this.d1, 2) * Math.PI * length
        this.total_volume = this.bolt_head_volume + this.bolt_shank_volume

        this.head_length = this.d10
        this.head_outter_radius = this.d2
        this.strain = Math.abs(Math.log(
            (this.head_length) / 
            (this.bolt_head_volume / (Math.pow(this.radius, 2) * Math.PI)))
        )
        this.k = 2.5
        this.A = Math.pow(this.head_outter_radius, 2) * Math.PI
        this.Yf = 854.38 * Math.pow(this.strain, 0.1673)
        this.forging_power = this.k * this.Yf * this.A // 鍛造力    

        console.log(this)
    }
}

class ISO_416_1990 {
    constructor(nominal, length) {
        this.length = length;
        this.nominal = nominal;
        console.log(nominal, length)
        const diameter = {
            m5: 5,
            m6: 6,
            m8: 8,
            m10: 10,
            m12: 12,
            m14: 14,
            m16: 16
        }
        this.diameter = diameter[nominal]

        this.phase1 = new ProcessPhase1(nominal, length)
        this.phase2 = new ProcessPhase2(nominal, length)
        this.phase3 = new ProcessPhase3(nominal, length)
        this.phase4 = new ProcessPhase4(nominal, length)

        // 產品參數
        this.head_diameter_dc = this.phase4.head_length * 2 //頭部直徑
        this.shank_diameter_d = this.phase4.d1 * 2 //桿徑
        this.head_length_k =  this.phase4.head_length //頭部高度(k)
        this.hex_width_s =  this.phase4.d9 //六角對邊(s)
        this.flange_length_c = this.phase4.d3 //法蘭高度(c)

        // 胚料尺寸
        // 胚料建議直徑 (mm)
        this.blank_recommended_diameter_min = Math.pow(Math.pow(this.head_diameter_dc, 2) / (1 + 4.5), 0.5)
        this.blank_recommended_diameter_max = Math.pow(Math.pow(this.shank_diameter_d, 2) / (1 - 0.6), 0.5)
        // 浮動模具胚料建議直徑 (mm)

        const dynamic_mold_blank_diameter_min = {
            m5: 5.57,
            m6: 6.56,
            m8: 8.11,
            m10: 9.97,
            m12: 11.82,
            m14: 13.64,
            m16: 15.82
        }
        const dynamic_mold_blank_diameter_max = {
            m5: 7.02,
            m6: 8.29,
            m8: 11.13,
            m10: 13.98,
            m12: 16.67,
            m14: 19.51,
            m16: 22.67
        }
        this.dynamic_mold_blank_diameter_min = dynamic_mold_blank_diameter_min[nominal]
        this.dynamic_mold_blank_diameter_max = dynamic_mold_blank_diameter_max[nominal]
        // 各道次尺寸
        // 胚料尺寸(mm)
        this.blank_d1 = this.diameter - 0.2 // D1
        this.blank_h1 = this.phase1.bolt_head_volume / (Math.pow(this.blank_d1 / 2, 2) * Math.PI) // H1
        this.blank_h2 = this.length // H2
        this.blank_complexity = 1// 整體複雜度
        this.blank_cross_section_area_ratio = 1 // 橫截面積比

        // 第一道次胚料尺寸(mm)	
        this.phase1_blank_d1 = this.phase1.d5 * 2// D1
        this.phase1_blank_d2 = this.phase1.d1 * 2// D2
        this.phase1_blank_h1 = this.phase1.d3 // H1
        this.phase1_blank_h2 = this.phase1.d4 // H2
        this.phase1_blank_h3 = this.phase1.d2 // H3
        this.phase1_blank_r1 = this.phase1.d6 // R1

        // 整體複雜度
        this.phase1_blank_complexity = (
            Math.pow(this.phase1_blank_d1 / 2, 2) * 
            Math.PI * 
            (this.phase1_blank_h1 + this.phase1_blank_h2)
        ) / this.phase1.bolt_head_volume

        // 橫截面積比
        this.phase1_blank_cross_section_area_ratio = (
            ( 
                Math.pow(this.phase1_blank_d1 / 2, 2) * Math.PI - 
                Math.pow(this.blank_d1 / 2, 2) * Math.PI 
            ) / 
            (
                Math.pow(this.blank_d1 / 2, 2) * Math.PI 
            )
        ) 

        // 第二道次胚料尺寸(mm)
        this.phase2_blank_d1 = this.phase2.d7 * 2// D1
        this.phase2_blank_d2 = this.phase2.d6 * 2// D2
        this.phase2_blank_d3 = this.phase2.d1 * 2// D3
        this.phase2_blank_h1 = this.phase2.d4 // H1
        this.phase2_blank_h2 = this.phase2.d2 // H2
        this.phase2_blank_a1 = this.phase2.d3 // A1

        // 整體複雜度
        this.phase2_blank_complexity = (
            (
                (
                    (this.phase2_blank_d1 / 2 - this.phase2_blank_d2 / 2) * 
                    Math.tan(20 * Math.PI / 180)
                ) + 
                (
                    this.phase2_blank_d1 / 2 - this.phase2_blank_d3 / 2) *
                    Math.tan(10 * Math.PI / 180) +
                this.phase2_blank_h1
            ) *
            (
                (Math.pow(this.phase2_blank_d1 / 2, 2) * Math.PI)
            )
        ) / this.phase2.bolt_head_volume 
        
        // 橫截面積比
        this.phase2_blank_cross_section_area_ratio = (
            ( 
                Math.pow(this.phase2_blank_d1 / 2, 2) * Math.PI - 
                Math.pow(this.blank_d1 / 2, 2) * Math.PI 
            ) / 
            (
                Math.pow(this.blank_d1 / 2, 2) * Math.PI 
            )
        )

        // 第三道次胚料尺寸(mm)
        this.phase3_blank_d1 = this.phase3.d5 * 2// D1
        this.phase3_blank_d2 = this.phase3.d7// D2
        this.phase3_blank_d3 = this.phase3.d1 * 2// D3
        this.phase3_blank_h1 = this.phase3.d8// H1
        this.phase3_blank_h2 = this.phase3.d6// H2
        this.phase3_blank_h3 = this.phase3.d2// H3
        this.phase3_blank_a1 = this.phase3.d3// A1
        this.phase3_blank_a2 = this.phase3.d4// A2
        // 整體複雜度
        this.phase3_blank_complexity = (
            Math.pow(this.phase3_blank_d1 / 2, 2) * Math.PI *
            (
                this.phase3_blank_h1 + this.phase3_blank_h2 +
                (this.phase3_blank_d1 / 2 - this.phase3_blank_d3 / 2)
                * Math.tan(this.phase3_blank_h3 * Math.PI / 180)
            )
        ) / this.phase3.bolt_head_volume 

        // 橫截面積比
        this.phase3_blank_cross_section_area_ratio = (
            ( 
                Math.pow(this.phase3_blank_d1 / 2, 2) * Math.PI - 
                Math.pow(this.blank_d1 / 2, 2) * Math.PI 
            ) / 
            (
                Math.pow(this.blank_d1 / 2, 2) * Math.PI 
            )
        )

        // 第四道次胚料尺寸(mm)	
        this.phase4_blank_d1 = this.phase4.d2 * 2 // D1
        this.phase4_blank_d2 = this.phase4.d9// D2
        this.phase4_blank_d3 = this.phase4.d1 * 2 // D3
        this.phase4_blank_h1 = this.phase4.d10 // H1
        this.phase4_blank_h2 = this.phase4.d3 // H2
        this.phase4_blank_h3 = this.phase4.d8 // H3
        this.phase4_blank_a1 = this.phase4.d4 // A1
        this.phase4_blank_a2 = this.phase4.d7 // A2
        // 整體複雜度
        this.phase4_blank_complexity = (
            Math.pow(this.phase4_blank_d1 / 2, 2) * Math.PI *
            this.phase4_blank_h1
            / this.phase4.bolt_head_volume 
        )
        // 橫截面積比
        this.phase4_blank_cross_section_area_ratio = (
            ( 
                Math.pow(this.phase4_blank_d1 / 2, 2) * Math.PI - 
                Math.pow(this.blank_d1 / 2, 2) * Math.PI 
            ) / 
            (
                Math.pow(this.blank_d1 / 2, 2) * Math.PI 
            )
        )
        // 道次負荷預估							
        // 第一道次
        this.phase1_load_kn = this.phase1.forging_power / 1000 // 負荷 (kN)	
        this.phase1_load_ton = this.phase1_load_kn / 9.8 // 負荷 (ton)
        // 第二道次
        this.phase2_load_kn = this.phase2.forging_power / 1000 // 負荷 (kN)	
        this.phase2_load_ton = this.phase2_load_kn / 9.8 // 負荷 (ton)
        // 第三道次
        this.phase3_load_kn = this.phase3.forging_power / 1000 // 負荷 (kN)	
        this.phase3_load_ton = this.phase3_load_kn / 9.8 // 負荷 (ton)
        // 第四道次
        this.phase4_load_kn = this.phase4.forging_power / 1000 // 負荷 (kN)	
        this.phase4_load_ton = this.phase4_load_kn / 9.8 // 負荷 (ton)
        console.log(this)
    }
}

// async function main(){
//     const length = 13
//     const nominal = 'm16'
//     const bolt = new ISO_416_1990(nominal, length)
// }
// main()
export default ISO_416_1990