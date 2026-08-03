import React from "react";
import { colors, cardStyle } from "../theme";
import { formatDateRange, formatDuration, combineDateRange } from "../utils/dateRange";

function DateBadge({ startDate, endDate }) {
  return (
    <span style={{ fontSize: "0.95rem", fontStyle: "italic", color: colors.coral }}>
      {formatDateRange(startDate, endDate)} · {formatDuration(startDate, endDate)}
    </span>
  );
}

function Position({ position, isLast }) {
  return (
    <div
      style={{
        borderLeft: `3px solid ${colors.teal}`,
        paddingLeft: "1rem",
        marginBottom: isLast ? 0 : "1.2rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
        <h4 style={{ fontWeight: "bold", fontSize: "0.98rem", margin: 0, color: "white" }}>
          {position.role}
        </h4>
        <DateBadge startDate={position.startDate} endDate={position.endDate} />
      </div>
      <p style={{ fontSize: "0.85rem", color: colors.coral, margin: "0.15rem 0 0.6rem" }}>
        {position.location}
      </p>

      {position.description && <p style={{ color: "white", margin: 0 }}>{position.description}</p>}

      {position.courses && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            rowGap: "0.5rem",
            columnGap: "1rem",
            fontSize: "0.9rem",
            color: "white",
            lineHeight: "1.6",
          }}
        >
          {position.courses.map((course) => (
            <React.Fragment key={course.name}>
              <div>• {course.name}</div>
              <div style={{ fontStyle: "italic", color: colors.coral }}>
                {formatDateRange(course.startDate, course.endDate)}
              </div>
            </React.Fragment>
          ))}
        </div>
      )}

      {position.bullets && (
        <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", color: "white", lineHeight: "1.6", margin: 0 }}>
          {position.bullets.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function CompanyGroup({ group }) {
  const isMultiRole = group.positions.length > 1;
  const combined = isMultiRole ? combineDateRange(group.positions) : group.positions[0];

  return (
    <div style={{ ...cardStyle, marginBottom: "1.5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
        <h3 style={{ fontWeight: "bold", fontSize: "1.15rem", margin: 0, color: "white" }}>
          {group.company}
        </h3>
        {isMultiRole && <DateBadge startDate={combined.startDate} endDate={combined.endDate} />}
      </div>

      <div style={{ marginTop: "1rem" }}>
        {group.positions.map((position, i) => (
          <Position
            key={position.role}
            position={position}
            isLast={i === group.positions.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default function Experience({ items }) {
  return (
    <section id="experience" style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.2rem", color: "white" }}>
        Experience
      </h2>
      {items.map((group) => (
        <CompanyGroup key={group.company} group={group} />
      ))}
    </section>
  );
}
