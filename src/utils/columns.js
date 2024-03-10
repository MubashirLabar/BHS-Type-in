export const csvDataColumns = [
  {
    sr_no: 1,
    name: "ID",
    value: "id",
    selector: (row) => row.id,
    maxWidth: "100px",
    sortable: true,
  },
  {
    sr_no: 2,
    name: "Armando Notes",
    value: "armando_notes",
    selector: (row) => row.armando_notes,
    minWidth: "300px",
  },
  {
    sr_no: 3,
    name: "V Notes",
    value: "v_notes",
    selector: (row) => row.v_notes,
  },
  {
    sr_no: 4,
    name: "Family Tree made",
    value: "family_tree_made",
    selector: (row) => row.family_tree_made,
  },
  {
    sr_no: 5,
    name: "Review Status",
    value: "review_status",
    selector: (row) => row.review_status,
    minWidth: "180px",
  },
  {
    sr_no: 6,
    name: "Color- D/H",
    value: "color_dh",
    selector: (row) => row.color_dh,
  },
  {
    sr_no: 7,
    name: "Color- J",
    value: "color_j",
    selector: (row) => row.color_j,
  },
  {
    sr_no: 8,
    name: "PA Link",
    value: "pa_link",
    cell: (row) => (
      <a
        href={row.pa_link}
        target="_blank"
        className="text-sm text-blue-500 hover:underline"
      >
        {row.pa_link}
      </a>
    ),
  },
  {
    sr_no: 9,
    name: "Tax Link",
    value: "text_link",
    cell: (row) => (
      <a
        href={row.text_link}
        target="_blank"
        className="text-sm text-blue-500 hover:underline"
      >
        {row.text_link}
      </a>
    ),
  },
  {
    sr_no: 10,
    name: "Trimmed #",
    value: "trimmed",
    selector: (row) => row.trimmed,
  },
  {
    sr_no: 11,
    name: "Parcel #",
    value: "parcel",
    selector: (row) => row.parcel,
    minWidth: "180px",
  },
  {
    sr_no: 12,
    name: "Case Number",
    value: "case_number",
    selector: (row) => row.case_number,
    minWidth: "180px",
  },
  {
    sr_no: 13,
    name: "LP Start Date",
    value: "lp_start_date",
    selector: (row) => row.lp_start_date,
    minWidth: "180px",
  },
  {
    sr_no: 14,
    name: "Reason",
    value: "reason",
    selector: (row) => row.reason,
  },
  {
    sr_no: 15,
    name: "Owner Name same?",
    value: "owner_name_same",
    selector: (row) => row.owner_name_same,
    minWidth: "220px",
  },
  {
    sr_no: 16,
    name: "Has a Co-owner?",
    value: "has_co_owner",
    selector: (row) => row.has_co_owner,
  },
  {
    sr_no: 17,
    name: "Mailing Address the same?",
    value: "mailing_address_same",
    selector: (row) => row.mailing_address_same,
  },
  {
    sr_no: 18,
    name: "Transfer or sold w/in the last yr?",
    value: "transfer_or_sold",
    selector: (row) => row.transfer_or_sold,
  },
  {
    sr_no: 19,
    name: "Per Deed",
    value: "per_deed",
    selector: (row) => row.per_deed,
  },
  {
    sr_no: 20,
    name: "Probate",
    value: "probate",
    selector: (row) => row.probate,
  },
  {
    sr_no: 21,
    name: "Prop Use",
    value: "prop_use",
    selector: (row) => row.prop_use,
  },
  {
    sr_no: 22,
    name: "2019",
    value: "year_2019",
    selector: (row) => row.year_2019,
  },
  {
    sr_no: 23,
    name: "Is '19 Tax cert?",
    value: "is_19_tax_cert",
    selector: (row) => row.is_19_tax_cert,
  },
  {
    sr_no: 24,
    name: "2020",
    value: "year_2020",
    selector: (row) => row.year_2020,
  },
  {
    sr_no: 25,
    name: "Is '20 Tax cert?",
    value: "is_20_tax_cert",
    selector: (row) => row.is_20_tax_cert,
  },
  {
    sr_no: 26,
    name: "2021",
    value: "year_2021",
    selector: (row) => row.year_2021,
  },
  {
    sr_no: 27,
    name: "Is '21 Tax cert?",
    value: "is_21_tax_cert",
    selector: (row) => row.is_21_tax_cert,
  },
  {
    sr_no: 28,
    name: "2022",
    value: "year_2022",
    selector: (row) => row.year_2022,
  },
  {
    sr_no: 29,
    name: "Is '22 Tax cert?",
    value: "is_22_tax_cert",
    selector: (row) => row.is_22_tax_cert,
  },
  {
    sr_no: 30,
    name: "Unpaid Taxes Yrs",
    value: "unpaid_taxes_yrs",
    selector: (row) => row.unpaid_taxes_yrs,
  },
  {
    sr_no: 31,
    name: "Unpaid Taxes $",
    value: "unpaid_taxes_$",
    selector: (row) => row.unpaid_taxes_$,
    minWidth: "180px",
  },
  {
    sr_no: 32,
    name: "Estate",
    value: "estate",
    selector: (row) => row.estate,
  },
  {
    sr_no: 33,
    name: "Active Liens #",
    value: "active_liens",
    selector: (row) => row.active_liens,
  },
  {
    sr_no: 34,
    name: "Active Liens $",
    value: "active_liens_$",
    selector: (row) => row.active_liens_$,
    minWidth: "180px",
  },
  {
    sr_no: 35,
    name: "Lien FC #",
    value: "lien_fc",
    selector: (row) => row.lien_fc,
  },
  {
    sr_no: 36,
    name: "Lien FC $",
    value: "lien_fc_$",
    selector: (row) => row.lien_fc_$,
  },
  {
    sr_no: 37,
    name: "Mtg FC #",
    value: "mtg_fc",
    selector: (row) => row.mtg_fc,
  },
  {
    sr_no: 38,
    name: "Mtg FC $",
    value: "mtg_fc_$",
    selector: (row) => row.mtg_fc_$,
  },
  {
    sr_no: 39,
    name: "Last outstanding Mtg",
    value: "last_outstanding_mtg",
    selector: (row) => row.last_outstanding_mtg,
    minWidth: "180px",
  },
  {
    sr_no: 40,
    name: "Claim Amt",
    value: "claim_amt",
    selector: (row) => row.claim_amt,
  },
  {
    sr_no: 41,
    name: "Current Rev Mtg Yr",
    value: "current_rev_mtg_yr",
    selector: (row) => row.current_rev_mtg_yr,
  },
  {
    sr_no: 42,
    name: "Previous Mtg Yr",
    value: "previous_mtg_yr",
    selector: (row) => row.previous_mtg_yr,
  },
  {
    sr_no: 43,
    name: "Previous Mtg Payoff Amt + 10k",
    value: "previous_mtg_payoff_amt_plus_10k",
    selector: (row) => row.previous_mtg_payoff_amt_plus_10k,
  },
  {
    sr_no: 44,
    name: "Rev Mtg Max Bal",
    value: "rev_mtg_max_bal",
    selector: (row) => row.rev_mtg_max_bal,
  },
  {
    sr_no: 45,
    name: "Total Owed:",
    value: "total_owed",
    selector: (row) => row.total_owed,
  },
  {
    sr_no: 46,
    name: "Realtor.com Search",
    value: "realtor_search",
    cell: (row) => (
      <a
        href={row.realtor_search}
        target="_blank"
        className="text-sm text-blue-500 hover:underline"
      >
        {row.realtor_search}
      </a>
    ),
  },
  {
    sr_no: 47,
    name: "Market Value",
    value: "market_value",
    selector: (row) => row.market_value,
  },
  {
    sr_no: 48,
    name: "Equity %",
    value: "equity",
    selector: (row) => row.equity,
  },
  {
    sr_no: 49,
    name: "Points for Equity",
    value: "points_for_quity",
    selector: (row) => row.points_for_quity,
  },
  {
    sr_no: 50,
    name: "Equity $",
    value: "equity_$",
    selector: (row) => row.equity_$,
  },
  {
    sr_no: 51,
    name: "LP- Guardian At Litem",
    value: "lp_quardian_at_litem",
    selector: (row) => row.lp_quardian_at_litem,
  },
  {
    sr_no: 52,
    name: "Points for GAL",
    value: "points_for_gal",
    selector: (row) => row.points_for_gal,
  },
  {
    sr_no: 53,
    name: "LP-Note heirs found",
    value: "lp_note_heirs_found",
    selector: (row) => row.lp_note_heirs_found,
  },
  {
    sr_no: 54,
    name: "LP-Written Answer",
    value: "lp_written_answer",
    selector: (row) => row.lp_written_answer,
  },
  {
    sr_no: 55,
    name: "Points for LPANS",
    value: "points_for_lpans",
    selector: (row) => row.points_for_lpans,
  },
  {
    sr_no: 56,
    name: "Arial View",
    value: "arial_view",
    selector: (row) => row.arial_view,
  },
  {
    sr_no: 57,
    name: "Points for Arial",
    value: "points_for_arial",
    selector: (row) => row.points_for_arial,
    minWidth: "280px",
  },
  {
    sr_no: 58,
    name: "SV Search",
    value: "sv_search",
    cell: (row) => (
      <a
        href={row.sv_search}
        target="_blank"
        className="text-sm text-blue-500 hover:underline"
      >
        {row.sv_search}
      </a>
    ),
  },
  {
    sr_no: 59,
    name: "Street View",
    value: "street_view",
    selector: (row) => row.street_view,
    minWidth: "280px",
  },
  {
    sr_no: 60,
    name: "Points for Street",
    value: "points_for_street",
    selector: (row) => row.points_for_street,
  },
  {
    sr_no: 61,
    name: "Occupency",
    value: "occupency",
    selector: (row) => row.occupency,
  },
  {
    sr_no: 62,
    name: "Points for Occu",
    value: "points_for_accu",
    selector: (row) => row.points_for_accu,
  },
  {
    sr_no: 63,
    name: "OB Search",
    value: "ob_search",
    selector: (row) => row.ob_search,
  },
  {
    sr_no: 64,
    name: "OB Link",
    value: "ob_link",
    cell: (row) => (
      <a
        href={row.ob_link}
        target="_blank"
        className="text-sm text-blue-500 hover:underline"
      >
        {row.ob_link}
      </a>
    ),
  },
  {
    sr_no: 65,
    name: "Grade",
    value: "grade",
    selector: (row) => row.grade,
  },
  {
    sr_no: 66,
    name: "Points for BG",
    value: "points_for_bg",
    selector: (row) => row.points_for_bg,
  },
  {
    sr_no: 67,
    name: "Owner",
    value: "owner",
    selector: (row) => row.owner,
    minWidth: "280px",
  },
  {
    sr_no: 68,
    name: "Property Address",
    value: "property_address",
    selector: (row) => row.property_address,
    minWidth: "320px",
  },
  {
    sr_no: 69,
    name: "OB",
    value: "ob",
    selector: (row) => row.ob,
  },
  {
    sr_no: 70,
    name: "OB City",
    value: "ob_city",
    selector: (row) => row.ob_city,
  },
  {
    sr_no: 71,
    name: "Critieria",
    value: "criteria",
    selector: (row) => row.criteria,
    minWidth: "350px",
  },
  {
    sr_no: 72,
    name: "Daily Start-D",
    value: "daily_start_d",
    selector: (row) => row.daily_start_d,
  },
  {
    sr_no: 73,
    name: "Daily Stop-D",
    value: "daily_stop_d",
    selector: (row) => row.daily_stop_d,
  },
  {
    sr_no: 74,
    name: "Daily Start-H",
    value: "daily_start_h",
    selector: (row) => row.daily_start_h,
  },
  {
    sr_no: 75,
    name: "Daily Stop-H",
    value: "daily_stop_h",
    selector: (row) => row.daily_stop_h,
  },
  {
    sr_no: 76,
    name: "Jessica",
    value: "jessica",
    selector: (row) => row.jessica,
  },
  {
    sr_no: 77,
    name: "Total Score",
    value: "total_score",
    selector: (row) => row.total_score,
  },
  {
    sr_no: 78,
    name: "Drop Down Total",
    value: "drop_down_total",
    selector: (row) => row.drop_down_total,
  },
];
