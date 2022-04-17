import logo from './logo.svg';
import Select from 'react-select';
import './App.css';
import React, { useState } from 'react';
import ISO_416_1990 from './iso_416_1990'
const nominal_options = [
  { value: 'm5', label: 'M5' },
  { value: 'm6', label: 'M6' },
  { value: 'm8', label: 'M8' },
  { value: 'm10', label: 'M10' },
  { value: 'm12', label: 'M12' },
  { value: 'm14', label: 'M14' },
  { value: 'm16', label: 'M16' },
];

function App() {
  const [selectedOption, setSelectedOption] = useState({ value: 'm5', label: 'M5' });
  const [length, setLength] = useState(10);
  const bolt = new ISO_416_1990(selectedOption.value, length)
  return (
    <div className="App">
      <header>
        <h1>螺絲預成形設計系統</h1>
      </header>
      <Select
        defaultValue={selectedOption}
        value={selectedOption}
        onChange={setSelectedOption}
        options={nominal_options}
      />

      <input type="number" value={length} onChange={e => setLength(e.target.value)} /> 
      <div>規格: {selectedOption? selectedOption.value : '-' }</div>
      <div>桿長 (L): {length}</div>

      <div className="Card">
        <div className="Card-Title">產品參數</div>
        <div>頭部直徑 (dc): {bolt.head_diameter_dc}</div>
        <div>桿徑 (d): {bolt.shank_diameter_d}</div>
        <div>頭部高度 (k): {bolt.head_length_k}</div>
        <div>六角對邊 (s): {bolt.hex_width_s}</div>
        <div>法蘭高度 (c): {bolt.flange_length_c}</div>
      </div>
      
      <div className="Card">
        <div className="Card-Title">胚料建議直徑 (mm)</div>
        <div>min: {bolt.blank_recommended_diameter_min}</div>
        <div>max: {bolt.blank_recommended_diameter_max}</div>
      </div>

      <div className="Card">
        <div className="Card-Title">浮動模具胚料建議直徑 (mm)</div>
        <div>min: {bolt.dynamic_mold_blank_diameter_min}</div>
        <div>max: {bolt.dynamic_mold_blank_diameter_max}</div>
      </div>

      <div className="Card">
        <div className="Card-Title">胚料尺寸(mm)</div>
        <div>D1: {bolt.blank_d1}</div>
        <div>H1: {bolt.blank_h1}</div>
        <div>H2: {bolt.blank_h2}</div>
        <div>整體複雜度: {bolt.blank_complexity}</div>
        <div>橫截面積比: {bolt.blank_cross_section_area_ratio}</div>
      </div>
      
      <div className="Card">
        <div className="Card-Title">第一道次胚料尺寸(mm)</div>
        <div>D1: {bolt.phase1_blank_d1}</div>
        <div>D2: {bolt.phase1_blank_d2}</div>
        <div>H1: {bolt.phase1_blank_h1}</div>
        <div>H2: {bolt.phase1_blank_h2}</div>
        <div>H3: {bolt.phase1_blank_h3}</div>
        <div>R1: {bolt.phase1_blank_r1}</div>
        <div>整體複雜度: {bolt.phase1_blank_complexity}</div>
        <div>橫截面積比: {bolt.phase1_blank_cross_section_area_ratio}</div>
      </div>

      <div className="Card">
        <div className="Card-Title">第二道次胚料尺寸(mm)</div>
        <div>D1: {bolt.phase2_blank_d1}</div>
        <div>D2: {bolt.phase2_blank_d2}</div>
        <div>D3: {bolt.phase2_blank_d3}</div>
        <div>H1: {bolt.phase2_blank_h1}</div>
        <div>H2: {bolt.phase2_blank_h2}</div>
        <div>A1: {bolt.phase2_blank_a1}</div>
        <div>整體複雜度: {bolt.phase2_blank_complexity}</div>
        <div>橫截面積比: {bolt.phase2_blank_cross_section_area_ratio}</div>
      </div>

      <div className="Card">
        <div className="Card-Title">第三道次胚料尺寸(mm)</div>
        <div>D1: {bolt.phase3_blank_d1}</div>
        <div>D2: {bolt.phase3_blank_d2}</div>
        <div>D3: {bolt.phase3_blank_d3}</div>
        <div>H1: {bolt.phase3_blank_h1}</div>
        <div>H2: {bolt.phase3_blank_h2}</div>
        <div>H3: {bolt.phase3_blank_h3}</div>
        <div>A1: {bolt.phase3_blank_a1}</div>
        <div>A2: {bolt.phase3_blank_a2}</div>

        <div>整體複雜度: {bolt.phase3_blank_complexity}</div>
        <div>橫截面積比: {bolt.phase3_blank_cross_section_area_ratio}</div>

      </div>

      <div className="Card">
        <div className="Card-Title">第四道次胚料尺寸(mm)</div>

        <div>D1: {bolt.phase4_blank_d1}</div>
        <div>D2: {bolt.phase4_blank_d2}</div>
        <div>D3: {bolt.phase4_blank_d3}</div>
        <div>H1: {bolt.phase4_blank_h1}</div>
        <div>H2: {bolt.phase4_blank_h2}</div>
        <div>H3: {bolt.phase4_blank_h3}</div>
        <div>A1: {bolt.phase4_blank_a1}</div>
        <div>A2: {bolt.phase4_blank_a2}</div>

        <div>整體複雜度: {bolt.phase4_blank_complexity}</div>
        <div>橫截面積比: {bolt.phase4_blank_cross_section_area_ratio}</div>

      </div>

      <div className="Card">
        <div className="Card-Title">道次負荷預估(mm)</div>
        <div>第一道次: {bolt.phase1_load_kn} (kN) ({bolt.phase1_load_ton} (ton))</div>
        <div>第二道次: {bolt.phase2_load_kn} (kN) ({bolt.phase2_load_ton} (ton))</div>
        <div>第三道次: {bolt.phase3_load_kn} (kN) ({bolt.phase3_load_ton} (ton))</div>
        <div>第四道次: {bolt.phase4_load_kn} (kN) ({bolt.phase4_load_ton} (ton))</div>
      </div>

      <div className="Card">
        <div className="Card-Title">建議參數 / 第一道次</div>
        <div>D1: {bolt.phase1.d1}</div>
        <div>D2: {bolt.phase1.d2}</div>
        <div>D3: {bolt.phase1.d3}</div>
        <div>D4: {bolt.phase1.d4}</div>
        <div>D5: {bolt.phase1.d5}</div>
        <div>D6: {bolt.phase1.d6}</div>
      </div>

      <div className="Card">
        <div className="Card-Title">建議參數 / 第二道次</div>
        <div>D1: {bolt.phase2.d1}</div>
        <div>D2: {bolt.phase2.d2}</div>
        <div>D3: {bolt.phase2.d3}</div>
        <div>D4: {bolt.phase2.d4}</div>
        <div>D5: {bolt.phase2.d5}</div>
        <div>D6: {bolt.phase2.d6}</div>
        <div>D7: {bolt.phase2.d7}</div>
        <div>D8: {bolt.phase2.d8}</div>
      </div>

      <div className="Card">
        <div className="Card-Title">建議參數 / 第三道次</div>
        <div>D1: {bolt.phase3.d1}</div>
        <div>D2: {bolt.phase3.d2}</div>
        <div>D3: {bolt.phase3.d3}</div>
        <div>D4: {bolt.phase3.d4}</div>
        <div>D5: {bolt.phase3.d5}</div>
        <div>D6: {bolt.phase3.d6}</div>
        <div>D7: {bolt.phase3.d7}</div>
        <div>D8: {bolt.phase3.d8}</div>
        <div>D9: {bolt.phase3.d9}</div>
        <div>D10: {bolt.phase3.d10}</div>
        <div>D11: {bolt.phase3.d11}</div>
        <div>D12: {bolt.phase3.d12}</div>
      </div>

      <div className="Card">
        <div className="Card-Title">建議參數 / 第四道次</div>
        <div>D1: {bolt.phase4.d1}</div>
        <div>D2: {bolt.phase4.d2}</div>
        <div>D3: {bolt.phase4.d3}</div>
        <div>D4: {bolt.phase4.d4}</div>
        <div>D5: {bolt.phase4.d5}</div>
        <div>D6: {bolt.phase4.d6}</div>
        <div>D7: {bolt.phase4.d7}</div>
        <div>D8: {bolt.phase4.d8}</div>
        <div>D9: {bolt.phase4.d9}</div>
        <div>D10: {bolt.phase4.d10}</div>
        <div>D11: {bolt.phase4.d11}</div>
        <div>D12: {bolt.phase4.d12}</div>
      </div>
    </div>
  )

}

export default App;
