function calculateDCF() {
    const cf = parseFloat(document.getElementById('cf').value);
    const kf = parseFloat(document.getElementById('kf').value) / 100; // パーセント表示を考慮
    const nValue = document.getElementById('n').value;
    const n = nValue === '∞' ? Infinity : parseInt(nValue);

    if (isNaN(cf) || isNaN(kf) || (nValue !== '∞' && isNaN(n))) {
        alert("有効な数値を入力してください");
        return;
    }

    let dcfValue = 0;
    let steps = "";

    if (n === Infinity) {
        dcfValue = cf / kf;
        steps = `無限大の期間の場合: CF / kf = ${cf} / ${kf} = ${dcfValue.toFixed(2)}<br>`;
    } else {
        for (let i = 1; i <= n; i++) {
            const discountedValue = cf / Math.pow(1 + kf, i);
            dcfValue += discountedValue;
            steps += `Step ${i}: CF / (1 + kf)^${i} = ${cf} / (1 + ${kf})^${i} = ${discountedValue.toFixed(2)}<br>`;
        }
    }

    document.getElementById('dcfResult').innerHTML = `Total: ${dcfValue.toFixed(2)}<br><br>Steps:<br>${steps}`;
}

function calculateEVA() {
    const ic0 = parseFloat(document.getElementById('ic0').value);
    const nopat = parseFloat(document.getElementById('nopat').value);
    const kf = parseFloat(document.getElementById('kfEva').value) / 100; // パーセント表示を考慮
    const nValue = document.getElementById('nEva').value;
    const n = nValue === '∞' ? Infinity : parseInt(nValue);

    if (isNaN(ic0) || isNaN(nopat) || isNaN(kf) || (nValue !== '∞' && isNaN(n))) {
        alert("有効な数値を入力してください");
        return;
    }

    let evaValue = ic0;
    let steps = `Step 1: IC0 = ${ic0}<br>`;

    if (n === Infinity) {
        evaValue += nopat / kf;
        steps += `無限大の期間の場合: NOPAT / kf = ${nopat} / ${kf} = ${(nopat / kf).toFixed(2)}<br>`;
    } else {
        for (let i = 1; i <= n; i++) {
            const residualIncome = nopat - kf * ic0;
            const discountedValue = residualIncome / Math.pow(1 + kf, i);
            evaValue += discountedValue;
            steps += `Step ${i}: NOPAT / (1 + kf)^${i} = ${nopat} / (1 + ${kf})^${i} = ${discountedValue.toFixed(2)}<br>`;
        }
    }

    document.getElementById('evaResult').innerHTML = `Total: ${evaValue.toFixed(2)}<br><br>Steps:<br>${steps}`;
}

function calculateDDM() {
    const d = parseFloat(document.getElementById('d').value);
    const k = parseFloat(document.getElementById('k').value) / 100; // パーセント表示を考慮
    const nValue = document.getElementById('nDdm').value;
    const n = nValue === '∞' ? Infinity : parseInt(nValue);

    if (isNaN(d) || isNaN(k) || (nValue !== '∞' && isNaN(n))) {
        alert("有効な数値を入力してください");
        return;
    }

    let ddmValue = 0;
    let steps = "";

    if (n === Infinity) {
        ddmValue = d / k;
        steps = `無限大の期間の場合: D / k = ${d} / ${k} = ${ddmValue.toFixed(2)}<br>`;
    } else {
        for (let i = 1; i <= n; i++) {
            const discountedValue = d / Math.pow(1 + k, i);
            ddmValue += discountedValue;
            steps += `Step ${i}: D / (1 + k)^${i} = ${d} / (1 + ${k})^${i} = ${discountedValue.toFixed(2)}<br>`;
        }
    }

    document.getElementById('ddmResult').innerHTML = `Total: ${ddmValue.toFixed(2)}<br><br>Steps:<br>${steps}`;
}

function calculateEBO() {
    const b0 = parseFloat(document.getElementById('b0').value);
    const e = parseFloat(document.getElementById('e').value);
    const k = parseFloat(document.getElementById('kEbo').value) / 100; // パーセント表示を考慮
    const nValue = document.getElementById('nEbo').value;
    const n = nValue === '∞' ? Infinity : parseInt(nValue);

    if (isNaN(b0) || isNaN(e) || isNaN(k) || (nValue !== '∞' && isNaN(n))) {
        alert("有効な数値を入力してください");
        return;
    }

    let eboValue = b0;
    let steps = `Step 1: B0 = ${b0}<br>`;

    if (n === Infinity) {
        const residualIncome = e - k * b0;
        eboValue += residualIncome / k;
        steps += `無限大の期間の場合: (E - k * B0) / k = (${e} - ${k} * ${b0}) / ${k} = ${(residualIncome / k).toFixed(2)}<br>`;
    } else {
        for (let i = 1; i <= n; i++) {
            const residualIncome = e - k * b0;
            const discountedValue = residualIncome / Math.pow(1 + k, i);
            eboValue += discountedValue;
            steps += `Step ${i}: (E - k * B${i-1}) / (1 + k)^${i} = (${e} - ${k} * ${b0}) / (1 + ${k})^${i} = ${discountedValue.toFixed(2)}<br>`;
        }
    }

    document.getElementById('eboResult').innerHTML = `Total: ${eboValue.toFixed(2)}<br><br>Steps:<br>${steps}`;
}
